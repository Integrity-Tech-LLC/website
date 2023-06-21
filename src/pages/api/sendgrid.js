import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const verifyRecaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  console.log("I'm verifying captcha", secretKey);
  return await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });
};

function sendEmail(req, res) {
  console.log("I'm inside send email");
  verifyRecaptcha(req.body.token)
    .then((reCaptchaRes) => reCaptchaRes.json())
    .then((reCaptchaRes) => {
      console.log("captcha is verified");

      if (reCaptchaRes.success && reCaptchaRes.score >= 0.5) {
        console.log("I'm about to send an email");
        sendgrid
          .send({
            to: "chris@integritytechsoftware.com", // Your email where you'll receive emails
            from: "Christopherjay71186@gmail.com", // your website email address here
            subject: `New Contact Message`,
            html: `<div><p>Full Name: ${req.body.fullname}</p>
      <p>Email: ${req.body.email}</p>
      <p>Contact Reason: ${req.body.reason}</p>
      <p>Message: ${req.body.message}</p></div>`,
          })
          .then(() => {
            console.log("email sent");
            console.log("I'm sending the success code");
            return res.status(200);
          })
          .catch((e) => {
            console.log("something went wrong", e);
            return res.status(500);
          });
      } else {
        console.log("recaptchares", reCaptchaRes);
        return res.status(401);
      }
    })
    .catch((e) => {
      console.log("something went wrong", e);
      return res.status(500);
    });
}

export default sendEmail;
