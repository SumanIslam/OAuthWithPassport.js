const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

authRouter.get('/logout', (req, res) => {
  // handle with passport
  req.logout();
  res.redirect('/')
});

authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile'] 
}));

authRouter.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/profile/');
})

module.exports = authRouter;