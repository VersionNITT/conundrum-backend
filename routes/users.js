const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
const User = require("../models/User");

// Register
router.post("/register", (req, res) => {
	const { name, email, password, password2 } = req.body;
	let errors = [];

	if (!name || !email || !password || !password2) {
		errors.push({ msg: "Please enter all fields" });
	}

	if (password != password2) {
		errors.push({ msg: "Passwords do not match" });
	}

	if (password.length < 6) {
		errors.push({ msg: "Password must be at least 6 characters" });
	}

	if (errors.length > 0) {
		res.send({ Response: "Fields not properly filled", Error: errors });
	} else {
		User.findOne({ email: email }).then((user) => {
			if (user) {
				res.send({ Response: "Email already exists", Error: errors });
			} else {
				const newUser = new User({
					name,
					email,
					password,
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then((user) => {
								const user1 = {
									_id: user._id,
									name: user.name,
									email: user.email,
								};
								res.send({ Response: "Successfully Registered", user1 });
							})
							.catch((err) => console.log(err));
					});
				});
			}
		});
	}
});

// Login
router.post("/login", (req, res, next) => {
	if (req.session) {
		if (req.session.count) {
			req.session.count++;
		} else {
			req.session.count = 1;
		}

		console.log(req.session.count);
	}

	passport.authenticate("local", {
		successRedirect: "/dashboard",
		failureRedirect: "/users/login",
	})(req, res, next);
});

// Logout
router.get("/logout", (req, res) => {
	req.logout();
	res.send({ Response: "Successfully Logged out" });
});

module.exports = router;
