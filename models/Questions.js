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
  hint: {
    type: String,
    required: true,
  },
  puzzle: {
    type: String,
    required: false,
  },
  puzzleAns: {
    type: String,
    required: false,
  },
});

QuestionSchema.pre("save", async function save(next) {
  if (!this.isModified("answer") && !this.isModified("puzzleAns"))
    return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.answer = await bcrypt.hash(this.answer, salt);
    this.puzzleAns = await bcrypt.hash(this.puzzleAns, salt);

    return next();
  } catch (err) {
    return next(err);
  }
});

QuestionSchema.methods.validateAnswer = function validateAnswer(data) {
  // data = data.toLowerCase();
  return bcrypt.compareSync(data, this.answer);
};

QuestionSchema.methods.validatePuzzleAnswer = function validateAnswer(data) {
  // data = data.toLowerCase();
  return bcrypt.compareSync(data, this.puzzleAns);
};

const Questions = mongoose.model("Questions", QuestionSchema);

module.exports = Questions;
