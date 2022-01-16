const express = require('express');

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.render('login')
});

authRouter.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out')
});

authRouter.get('/google', (req, res) => {
  // handle with passport
  res.send('logging in with google')
});

module.exports = authRouter;