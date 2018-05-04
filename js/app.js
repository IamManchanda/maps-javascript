/* Maps */

const question = new Map();

question.set('ask', 'What is the latest version of JavaScript?');
question.set(1, 'ES 2008');
question.set(2, 'ES 2015');
question.set(3, 'ES 2016');
question.set(4, 'ES 2017');
question.set(5, 'ES 2018');
question.set(6, 'ES 2019');
question.set('correct', 6);
question.set(true, 'Correct Answer!');
question.set(false, 'Wrong! Better luck, next time.');

// Ask Questions
const askQuestion = question.get('ask');
console.log(askQuestion);

// Store Answer
const correctAnswer = question.get('correct');

// Show Options
for (const [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    const showCurrentOption = `Option ${key}: ${value}`;
    console.log(showCurrentOption);
  }
}

// Prompt user
const userAnswer = parseInt(prompt('Write the correct answer?'), 10);

// Show Result
const showResult = question.get(userAnswer === correctAnswer);
console.log(showResult);
