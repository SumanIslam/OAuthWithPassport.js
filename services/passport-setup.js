const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  // GoogleStrategy option goes here
}), () => {
  // passport callback function
})