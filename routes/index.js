const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.send({Response: "Welcome"}));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.send({
    Response: "Successfully Logged in",
    user: req.user,
    session: req.session,
    sessionID: req.sessionID
  })
);

module.exports = router;
