// const handler = require("./handler")
const mailgun = require("mailgun-js");

export default function (req, res) {
  let phone = req.body.phone ? req.body.phone : "No phone number";
  const DOMAIN = process.env.DOMAIN;
  const api_key = process.env.api_key;
  const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
  const data = {
    from: `My Portfolio ${req.body.email}`,
    to: "akoredeerisan@gmail.com",
    subject:
      "Action Required: Erisan , I have a message from a client through my portfolio website",
    text: `
    phone: ${phone}
    Message: ${req.body.message}
    `,
  };

  if (req.body.name.trim() == "" || req.body.name < 3) {
    res.status(400).json({ message: "Please provide a name" });
    return;
  }
  if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      req.body.email.trim()
    )
  ) {
    res.status(400).json({ message: "Email is invalid" });
    return;
  }

  if (req.body.message < 10) {
    res.status(400).json({ message: "Please provide a sentence" });
    return;
  }

  mg.messages().send(data, function (error, body) {
    if (error) {
      res
        .status(501)
        .json({ error: error, msg: "Something went wrong, retry !!!" });

      return;
    }
    if (body) {
      res.status(200).json({
        msg: "Thanks for contacting me, i will get back to you in a bit.",
      });
    }
  });
}
