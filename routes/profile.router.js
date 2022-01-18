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
  res.send(`You are logged in ${req.user.userName}`);
});

module.exports = profileRouter;