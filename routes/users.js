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

router.post("/login", eventStarted, (req, res, next) => {
	console.log(req.body);
	passport.authenticate("local", function (err, user, info) {
		if (err) {
			return res.status(401).send(err);
		}
		if (!user) {
			return res.status(401).send(err);
		}
		req.logIn(user, function (err) {
			if (err) {
				return res.status(401).send(err);
			}

			if (user.lastSession.totalScore !== undefined) {
				req.session.score = user.lastSession.totalScore;
				req.session.currentQuestion = user.lastSession.currentQuestion;
			} else {
				req.session.score = 0;
			}

			return res.redirect("/dashboard");
		});
	})(req, res, next);
});

// Logout
router.get("/logout", eventStarted, (req, res) => {
	if (req.session.passport) {
		User.findById(req.session.passport.user).then((user) => {
			if (user) {
				user.lastSession = {
					totalScore: req.session.score,
					currentQuestion: req.session.currentQuestion,
				};
				user.save();
				req.logout();
				req.session.destroy(function (err) {
					res.send({ Response: "Successfully Logged out" });
				});
			}
		});
	}
});

function eventStarted(req, res, next) {
	if (process.env.startTime && process.env.endTime) {
		const currentTime = Date.now();
		if (
			currentTime < process.env.startTime ||
			currentTime > process.env.endTime
		) {
			res.status(403).json({ error: "Event has not yet started" });
		} else {
			next();
		}
	} else {
		res.status(403).json({ error: "Event has not yet started" });
	}
}

module.exports = router;
