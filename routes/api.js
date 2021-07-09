const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Question = require("../models/Questions");
const User = require("../models/User");
const { validate: uuidValidate } = require("uuid");

router.get("/list", ensureAuthenticated, (req, res) => {
	Question.find({}, "category title score puzzle", (err, questions) => {
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
			if (err) res.sendStatus(401);

			if (question.validateAnswer(ans)) {
				const userId = req.session.passport.user;
				User.findById(userId, (err, user) => {
					if (err) res.sendStatus(401);
					let score = question.score;

					//Checking for if hint was taken
					const questionHistory = user.score.questions.find((q) => {
						console.log(q.id, prvsId);
						return q.id == prvsId;
					});
					console.log(questionHistory);

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
						Question.findById(nextId, "description title", (err, question) => {
							if (err) res.sendStatus(401);
							req.session.currentQuestion = nextId;
							res.json(question);
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
						user.score.questions.push({ id: qid, hintTaken: true });
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
	console.log(id, ans);
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
