const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Question = require("../models/Questions");

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
			res.json(question);
		});
	} else {
		//Check answer
		Question.findById(prvsId, (err, question) => {
			if (err) console.log(err);
			if (question.validateAnswer(ans)) {
				Question.findById(nextId, "description title", (err, question) => {
					if (err) console.log(err);
					res.json(question);
				});
			} else {
				res.send(false);
			}
		});
	}
});

module.exports = router;
