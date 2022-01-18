const express = require('express');

const profileRouter = express.Router();

function checkLoggedIn(req, res, next) {
  const loggedIn = req.user;
  
  if(!loggedIn) {
    res.redirect('/auth/login')
  } else {
    next()
  }
}

profileRouter.get('/', checkLoggedIn, (req, res) => {
  res.render('profile', {user: req.user});
});

module.exports = profileRouter;