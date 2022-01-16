const path = require('path');
const express = require('express');

const app = express();

const PORT = 3001;

// set view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
})