import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const verifyRecaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  return await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });
};

async function sendEmail(req, res) {
  verifyRecaptcha(req.body.token)
    .then((reCaptchaRes) => reCaptchaRes.json())
    .then((reCaptchaRes) => {
      try {
        if (reCaptchaRes.success && reCaptchaRes.score >= 0.5) {
          sendgrid.send({
            to: "chris@integritytechsoftware.com", // Your email where you'll receive emails
            from: "Christopherjay71186@gmail.com", // your website email address here
            subject: `New Contact Message`,
            html: `<div><p>Full Name: ${req.body.fullname}</p>
      <p>Email: ${req.body.email}</p>
      <p>Contact Reason: ${req.body.reason}</p>
      <p>Message: ${req.body.message}</p></div>`,
          });
        } else {
          return res
            .status(error.statusCode || 401)
            .json({ error: "Captcha Validation Failed" });
        }
      } catch (error) {
        return res
          .status(error.statusCode || 500)
          .json({ error: error.message });
      }
    });

  return res.status(200).json({ error: "" });
}

export default sendEmail;
