const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "rodrigordzw@gmail.com",
    pass: "jpkb syms pfaf gpjc",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(recipientEmail) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Rodrigo 👻" <rodrigordzw@gmail.com>', // sender address
    to: recipientEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

// Replace 'example@example.com' with the recipient's email address
sendEmail('example@example.com').catch(console.error);
