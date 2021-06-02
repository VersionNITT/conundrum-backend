module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.send({Response: "Please login with credentials to access"});
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    const user1 = {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email
    }
    res.send({
      Response: "Already Logged In",
      user: user1,
      session: req.session,
      sessionID: req.sessionID
    });      
  }
};
