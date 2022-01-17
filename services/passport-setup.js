const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// saveUser function to save user in db
const saveUser = require('../model/user.model');

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const googleAuthOptions = {
  // GoogleStrategy option goes here
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}
const verifyCallback = async (accessToken, refreshToken, profile, cb) => {
  // passport callback function
  console.log('passport callback function fired');
  console.log(profile);
  await saveUser({
    googleID: profile.id,
    userName: profile.displayName,
  })
};

passport.use(new GoogleStrategy(googleAuthOptions, verifyCallback))