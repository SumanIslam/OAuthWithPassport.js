const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.render('login')
});

authRouter.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out')
});

authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile'] 
}));

authRouter.get('/google/callback', (req, res) => {
  res.send('You reached the callback url')
})

module.exports = authRouter;