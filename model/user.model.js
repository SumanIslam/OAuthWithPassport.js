const userModel = require('./user.mongo');

async function saveUser(user) {
  try {
    return await userModel.findOneAndUpdate({
      googleID: user.googleID,
    }, user, {
      upsert: true,
    })
  } catch(err) {
    console.log(`Failed to save Launch: ${err.message}`);
  }
};

async function getUser(id) {
  try {
    return await userModel.findById(id);
  } catch(err) {
    console.log(`Couldn't get user: ${err.message}`);
  }
}

module.exports = {
  saveUser,
  getUser,
};