const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

const QuestionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
		default: "General",
	},
	score: {
		type: Number,
		required: true,
		default: 100,
	},
	answer: {
		type: String,
		required: true,
	},
});

QuestionSchema.pre("save", async function save(next) {
	if (!this.isModified("answer")) return next();
	try {
		const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
		this.answer = await bcrypt.hash(this.answer, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

QuestionSchema.methods.validateAnswer = function validateAnswer(data) {
	return bcrypt.compareSync(data, this.answer);
};

const Questions = mongoose.model("Questions", QuestionSchema);

module.exports = Questions;
