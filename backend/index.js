require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

const sendEmail = (name, email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const subject = "Mail Checkup from Nodemailer";
  const to = email;
  const from = process.env.EMAIL;
  const template = handlebars.compile(
    fs.readFileSync(path.join(__dirname, "template/", "Email.hbs"), "utf8")
  );
  const html = template({ name: name });

  const mailOptions = {
    from,
    to,
    subject,
    html,
  };
  console.log(mailOptions);
  console.log("email: ", process.env.EMAIL);
  console.log("PASSWORD: ", process.env.PASSWORD);

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("mail send");
    }
  });
};

app.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  res.json({ message: "Data received successfully" });
  sendEmail(name, email);
});

app.listen(8800, () => {
  console.log("server running at 8800");
});
