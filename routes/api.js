const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Question = require("../models/Questions");
const User = require("../models/User");

router.get("/list", ensureAuthenticated, (req, res) => {
	Question.find({}, "category title score", (err, questions) => {
		if (err) console.log(err);
		res.json(questions);
	});
});

router.post("/question", ensureAuthenticated, (req, res) => {
	const { nextId, prvsId, ans } = req.body;

	//Check answer if null than give the first question as reponse

	if (!ans && nextId && !prvsId) {
		Question.findById(nextId, (err, question) => {
			if (err) console.log(err);
			req.session.currentQuestion = nextId;
			console.log(req.session);
			res.json(question);
		});
	} else {
		//Check answer
		Question.findById(prvsId, (err, question) => {
			if (err) console.log(err);
			if (question.validateAnswer(ans)) {
				Question.findById(nextId, "description title", (err, question) => {
					if (err) console.log(err);
					req.session.currentQuestion = nextId;
					res.json(question);
				});
			} else {
				res.send(false);
			}
		});
	}
});

router.post("/setKey", ensureAuthenticated, (req, res) => {
	const { id, key } = req.body;
	const userId = req.session.passport.user;

	User.findById(userId, (err, user) => {
		if (err) res.sendStatus(401);
		user.hintKey = {
			id,
			key,
		};
		user.save();
		res.json({ key });
	});
});

module.exports = router;
