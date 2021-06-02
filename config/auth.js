module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.send({Resposne: "Please login with credentials to access"});
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.send({
      Response: "Already Logged In",
      user: req.user,
      session: req.session,
      sessionID: req.sessionID
    });      
  }
};
