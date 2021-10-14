const Question = require("./models/Questions");
const questions = require("./questions");

const init = () => {
  questions.forEach(async (question) => {
    var questionObj = new Question(question);
    await questionObj.save();
  });
};

module.exports = init;

