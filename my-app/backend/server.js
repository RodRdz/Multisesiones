const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

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

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Redirigir al frontend después de la autenticación exitosa
        res.redirect('http://localhost:3000/dashboard');
    }
);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/user', (req, res) => {
    res.send(req.user);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
