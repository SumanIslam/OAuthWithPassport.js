const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const authRouter = require('./routes/auth.router');
const passportSetup = require('./services/passport-setup');

require('dotenv').config();

const config = {
  MONGO_URL: process.env.MONGO_URL,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
}

const app = express();

const PORT = 3001;

// set view engine
app.set('view engine', 'ejs');

// cookie session
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [ config.COOKIE_KEY_1 ],
}))

// initialize
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(config.MONGO_URL, () => {
  console.log('connected to mongodb');
})
// routes
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
})