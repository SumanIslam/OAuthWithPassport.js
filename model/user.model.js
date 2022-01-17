const userModel = require('./user.mongo');

async function saveUser(user) {
  try {
    await userModel.findOneAndUpdate({
      googleID: user.googleID,
    }, user, {
      upsert: true,
    })
  } catch(err) {
    console.log(`Failed to save Launch: ${err.message}`);
  }
};

module.exports = saveUser;