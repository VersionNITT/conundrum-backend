const Question = require("./models/Questions");
const questions = require("./questions");
const mongoose = require("mongoose");

const init = async () => {
  //removing collection to prevent duplicate questions
  try {
    await Question.collection.drop();
  } catch (error) {
    console.log("questions collection removed already!!");
  }

  await Question.create(questions);

  console.log("Questions Loaded");
};

module.exports = init;
