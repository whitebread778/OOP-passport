const { MemoryStore } = require("express-session");

// new MemoryStore() for where sessions are stored
let store = new MemoryStore();

// organize session keys into an array, pass with session, to callback
const getSessions = () => {
  return new Promise((resolve, reject) => {
    let sessionList = [];

    store.all((err, sess) => {
      for (let ses in sess) {
        sessionList.push(ses);
      }
      resolve([sess, sessionList]);
    });
  });
}

// revoke/delete key's session in store
const revokeSession = (key) => {
  return new Promise((resolve, reject) => {
    store.destroy(key, err => {
      resolve();
    })
  });
}

module.exports = { store, getSessions, revokeSession };