const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");
const { store, getSessions, revokeSession } = require("../models/userSession");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

// handle GET request for /admin, and pass session info to the page
router.get("/admin", isAdmin, (req, res) => {
  getSessions()
  .then(sessionData => {
    res.render("admin", {
      user: req.user,
      sessions: sessionData[1],
      entireSession: sessionData[0]
    });
  });
});

// handle GET request for revoking a session
router.get("/admin/revoke", isAdmin, (req, res) => {
  revokeSession(req.query.key)
  .then(() => {
    return getSessions();
  })
  .then(sessionData => {
    res.render("admin", {
      user: req.user,
      sessions: sessionData[1],
      entireSession: sessionData[0]
    });
  });
});

module.exports = router;
