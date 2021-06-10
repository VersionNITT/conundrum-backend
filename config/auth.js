module.exports = {
	ensureAuthenticated: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		res.status(401);
		res.send({ Response: "Please login with credentials to access" });
	},
};
