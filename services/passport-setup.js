const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// saveUser function to save user in db
const { saveUser, getUser } = require('../model/user.model');

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

// serializeUser function to save user in browser cookie
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// deSerializeUser function to get the cooking from browser
passport.deserializeUser((id, done) => {
  getUser(id).then(user => {
    done(null, user);
  })
})

// GoogleStrategy option goes here
const googleAuthOptions = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}

// passport callback function
const verifyCallback = async (accessToken, refreshToken, profile, cb) => {
  const user = await saveUser({
    googleID: profile.id,
    userName: profile.displayName,
  });
  console.log(user);
  cb(null, user);
};

passport.use(new GoogleStrategy(googleAuthOptions, verifyCallback))