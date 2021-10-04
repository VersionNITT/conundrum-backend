module.exports = {
	ensureAuthenticated: function (req, res, next) {
		console.log()
		if (req.isAuthenticated()) {
			return next();
		}
		req.session.destroy(function (err) {
			res.status(401);
			res.send({ Response: "Please login with credentials to access" });
		});
	},
};
