const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Crear una instancia de Express para el servidor de autenticación
const authApp = express();
const authPort = 5000;

// Crear una instancia de Express para el servidor de correos electrónicos
const emailApp = express();
const emailPort = 3001;

// Configuración de CORS para ambos servidores
authApp.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

emailApp.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Configuración de bodyParser
authApp.use(bodyParser.json());
emailApp.use(bodyParser.json());

// Configuración de sesión y Passport
authApp.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
authApp.use(passport.initialize());
authApp.use(passport.session());

// Configuración de Passport con Google Strategy
passport.use(new GoogleStrategy({
    clientID: '856237462417-ff4b6he58ql6gcio7badv48ht4114855.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:5000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
    // Aquí puedes manejar la lógica para encontrar o crear un usuario en tu base de datos
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Rutas de autenticación con Google
authApp.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authApp.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Redirigir al frontend después de la autenticación exitosa
        res.redirect('http://localhost:3000/dashboard');
    }
);

authApp.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.send('Logged out');
    });
});

authApp.get('/user', (req, res) => {
    res.send(req.user);
});

// Configuración de Nodemailer para el servidor de correos electrónicos
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

// Rutas para el servidor de correos electrónicos
emailApp.post('/send-email', async (req, res) => {
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

        res.status(200).send({ message: 'Email sent', token: token });
    } catch (error) {
        res.status(500).send({ error: 'Failed to send email', details: error });
    }
});

emailApp.post('/verify-token', (req, res) => {
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

// Iniciar ambos servidores
authApp.listen(authPort, () => {
    console.log(`Auth server running at http://localhost:${authPort}`);
});

emailApp.listen(emailPort, () => {
    console.log(`Email server running at http://localhost:${emailPort}`);
});
