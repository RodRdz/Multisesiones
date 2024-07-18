const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const secret = process.env.SECRET;

const generateToken = (email) => {
  const payload = { email };
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, secret, options);
};

app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;
  const token = generateToken(to);

  try {
    await transporter.sendMail({
      from: `"Rodrigo 👻" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject || "Token de Autenticación",
      text: text || `Aquí está su token, favor de copiarlo en la página: ${token}`,
      html: html || `<b>Su token de autenticación es: ${token}</b>`,
    });

    res.status(200).send({ message: 'Email sent' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send email', details: error });
  }
});

app.post('/verify-token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).send({ error: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    res.status(200).send({ message: 'Token is valid', email: decoded.email });
  } catch (error) {
    res.status(400).send({ error: 'Invalid token', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
