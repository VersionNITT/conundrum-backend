const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Question = require("../models/Questions");
const User = require("../models/User");
const { validate: uuidValidate } = require("uuid");

router.get("/time", (req, res) => {
	const time = process.env.endTime - Date.now();
	res.json({ time });
});

router.get("/list", ensureAuthenticated, (req, res) => {
	Question.find({}, "category title score puzzle", (err, questions) => {
		if (err) res.sendStatus(401);
		res.json(questions);
	});
});

router.post("/question", ensureAuthenticated, (req, res) => {
	const { nextId, prvsId, ans } = req.body;

	//Check answer if null than give the first question as reponse

	if (!ans && nextId && !prvsId) {
		Question.findById(nextId, (err, question) => {
			if (err) res.sendStatus(401);
			req.session.currentQuestion = nextId;
			res.json({ question, score: req.session.score });
		});
	} else {
		//Check answer
		Question.findById(prvsId, (err, question) => {
			if (err) res.sendStatus(401);

			if (question.validateAnswer(ans)) {
				const userId = req.session.passport.user;
				User.findById(userId, (err, user) => {
					if (err) res.sendStatus(401);
					let score = question.score;

					//Checking for if hint was taken
					const questionHistory = user.score.questions.find((q) => {
						return q.id == prvsId;
					});

					//If taken then deduct score
					if (questionHistory) {
						score = questionHistory.hintTaken ? score * 0.9 : score;
						questionHistory.score = score;
					} else {
						//Else create a new entry for the question attempted
						user.score.questions.push({
							id: prvsId,
							hintTaken: false,
							score,
						});
					}
					user.save((err) => {
						if (err) res.sendStatus(401);

						//Updating total score on session
						req.session.score += score;
						Question.findById(nextId, "description title", (err, question) => {
							if (err) res.sendStatus(401);
							req.session.currentQuestion = nextId;
							res.json({ question, score: req.session.score });
						});
					});
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
						user.score.questions.push({ id: qid, hintTaken: true, score: 0 });
						user.save((err, user) => {
							if (err) res.sendStatus(401);
							res.json({ hint: question.hint });
						});
					}
				});
			}
		}
	);
});
router.post("/checkPuzzle", ensureAuthenticated, (req, res) => {
	const { id, ans } = req.body;
	Question.findById(id, (err, question) => {
		if (err) res.sendStatus(500);
		else {
			if (question.validatePuzzleAnswer(ans)) {
				res.json({ status: true });
			} else {
				res.json({ status: false });
			}
		}
	});
});

module.exports = router;
