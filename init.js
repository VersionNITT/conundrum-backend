const Question = require("./models/Questions");
const questions = require("./questions");

const init = () => {
  questions.forEach(async (question) => {
    var questionObj = new Question(question);
    await questionObj.save();
  });
};

module.exports = init;

//Generating 10 random questions
// const init = () => {
// 	for (let i = 0; i < 10; i++) {
// 		var QuestionData = new Question({
// 			title: `Question ${i + 1}`,
// 			description:
// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Nisl vel pretium lectus quam id. Id diam vel quam elementum pulvinar etiam. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Pellentesque habitant morbi tristique senectus et netus et. In massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In dictum non consectetur a erat nam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. In iaculis nunc sed augue lacus viverra vitae. Id donec ultrices tincidunt arcu. Rhoncus dolor purus non enim praesent. A lacus vestibulum sed arcu non odio euismod lacinia. Felis donec et odio pellentesque diam. Dui nunc mattis enim ut tellus elementum. Purus ut faucibus pulvinar elementum. Cursus risus at ultrices mi tempus. Nullam non nisi est sit amet facilisis magna. Maecenas ultricies mi eget mauris pharetra et ultrices neque. At volutpat diam ut venenatis tellus in metus vulputate eu. Sapien eget mi proin sed libero enim sed faucibus. Nibh ipsum consequat nisl vel pretium lectus. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Sit amet consectetur adipiscing elit pellentesque. Pulvinar etiam non quam lacus. Vitae congue eu consequat ac felis donec",
// 			category: `Category ${(i % 3) + 1}`,
// 			score: 100 * ((i % 3) + 1),
// 			answer: `ans${i + 1}`,
// 			hint: `${i + 1}`,
// 			puzzle:
// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Nisl vel pretium lectus quam id. Id diam vel quam elementum pulvinar etiam. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Pellentesque habitant morbi tristique senectus et netus et. In massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In dictum non consectetur a erat nam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. In iaculis nunc sed augue lacus viverra vitae. Id donec ultrices tincidunt arcu. Rhoncus dolor purus non enim praesent. A lacus vestibulum sed arcu non odio euismod lacinia. Felis donec et odio pellentesque ",
// 			puzzleAns: `puzzle${i + 1}`,
// 		});
// 		QuestionData.save((err) => {
// 			if (err) console.log(err);
// 		});
// 	}
// };

module.exports = init;
