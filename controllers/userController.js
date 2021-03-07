const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

// find user with id, otherwise create a user
const findOrCreate = (profile) => {
  let user = userModel.findUser(profile.id);
  if (!user) {
    user = userModel.createUser(profile);
  }
  return user;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  findOrCreate
};
