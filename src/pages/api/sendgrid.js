const verifyRecaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  console.log("I'm verifying captcha");
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
        let nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
            user: "cneisen716@gmail.com",
            pass: process.env.GMAIL_APP_PASSWORD,
          },
          secure: true,
        });
        const mailData = {
          from: "cneisen716@gmail.com",
          to: "chris@integritytechsoftware.com",
          subject: `New Contact Message`,
          text: req.body.message + " | Sent from: " + req.body.email,
          html: `<div><p>Full Name: ${req.body.fullname}</p>
      <p>Email: ${req.body.email}</p>
      <p>Contact Reason: ${req.body.reason}</p>
      <p>Message: ${req.body.message}</p></div>`,
        };
        transporter.sendMail(mailData, function (err) {
          if (err) console.log(err);
          else return res.status(200);
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
