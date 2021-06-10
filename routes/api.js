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
	const { id, ans } = req.body;

	//Check answer if null than give the first question as reponse

	if (!ans) {
		Question.findOne({}, (err, question) => {
			if (err) console.log(err);
			res.json(question);
		});
	} else {
		//Check answer
		if (false) {
			Question.findById(id, "description title", (err, question) => {
				if (err) console.log(err);
				res.json(question);
			});
		}
	}
});

module.exports = router;
