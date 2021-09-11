const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const path = require("path");

// Dashboard
router.get("/", (req, res) => {
	res.sendFile(path.resolve("public/initEvent.html"));
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
	const user1 = {
		_id: req.user._id,
		name: req.user.name,
		email: req.user.email,
	};
	res.send({
		Response: "Successfully Logged in",
		user: user1,
		session: req.session,
		sessionID: req.sessionID,
	});
});

module.exports = router;
