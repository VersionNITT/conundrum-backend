module.exports = {
	ensureAuthenticated: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		res.send({ Response: "Please login with credentials to access" });
	},
};
