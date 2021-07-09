const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	score: {
		questions: [
			{
				id: ObjectId,
				hintTaken: Boolean,
				score: Number,
			},
		],
		required: false,
	},
	lastSession: {
		currentQuestion: ObjectId,
		totalScore: Number,
	},
	hintkey: {
		type: String,
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
