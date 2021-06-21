const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Question = require("../models/Questions");
const User = require("../models/User");
const { validate: uuidValidate } = require("uuid");

router.get("/list", ensureAuthenticated, (req, res) => {
	Question.find({}, "category title score", (err, questions) => {
		if (err) console.log(err);
		console.log(questions);
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
	const { key } = req.body;
	const userId = req.session.passport.user;
	if (!uuidValidate(key)) res.sendStatus(401);
	else {
		User.findByIdAndUpdate(
			userId,
			{ $set: { hintKey: key } },
			{
				new: true,
				strict: false,
			},
			(err, user) => {
				if (err) {
					console.log(err);
					res.sendStatus(401);
				}
				res.json({ key });
			}
		);
	}
});

router.post("/getHint", ensureAuthenticated, (req, res) => {
	const { key } = req.body;
	const userId = req.session.passport.user;
	const qid = req.session.currentQuestion;

	User.findOneAndUpdate(
		{ _id: userId, hintKey: key },
		{ $set: { hintKey: "" } },
		{
			new: true,
			strict: false,
		},
		(err, user) => {
			if (err) res.sendStatus(401);
			else if (user) {
				Question.findById(qid, (err, question) => {
					if (err) res.sendStatus(401);
					else if (question) {
						res.json({ hint: question.hint });
					}
				});
			}
		}
	);
});

module.exports = router;
