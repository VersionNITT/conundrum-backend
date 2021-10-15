require("dotenv").config();
const mongoose = require("mongoose");
const db = process.env.MONGOURI;
const User = require("./models/User");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

User.find({}, (err, users) => {
  const usersWithScore = users.map((user) => {
    const totalScore = user.score.questions.reduce(
      (acc, q) => acc + q.score,
      0
    );
    return { name: user.name, score: totalScore, done: user.done };
  });

  usersWithScore.sort((u1, u2) => {
    if (u1.score === u2.score) {
      return u1.done - u2.done;
    }
    return u2.score - u1.score;
  });

  usersWithScore.forEach((user) => {
    console.log(
      `Name: ${user.name} \t---\t Score: ${user.score} \t---\t Duration: ${user.done} ms`
    );
  });
});
