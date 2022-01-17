const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  userName: String,
  googleID: String,
});

// connect userSchema to userModel
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;