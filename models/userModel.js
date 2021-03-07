let database = [
  {
    id: 0,
    name: "Admin",
    email: "admin123@gmail.com",
    password: "admin123!",
    role: "admin"
  },
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "user"
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "user"
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "user"
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },

  // find and return a user, or undefined
  findUser: (id) => {
    const user = database.find((user) => user.id === id);
    return user
  },

  // create user using profile
  createUser: (profile) => {
    let user = {
      id: profile.id,
      name: profile.username,
      url: profile.profileUrl,
      role: "user"
    }
    database.push(user);
    return user;
  }
};

module.exports = { database, userModel };
