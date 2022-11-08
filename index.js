const readlineSync = require('readline-sync');
const chalk = require('chalk');

const highestScore = {
    name : 'Sid',
    score: 5
};
const secondHighestScore = {
    name: 'Dan',
    score: 4
};
const player = readlineSync.question("Enter your name: ");


let score = 0;

console.log(`Welcome to the game ${player}. Let us see how well do you know India?`);
console.log("--------------------------");

function play (question, answer) {
  const providedAnswer = readlineSync.question(`${question} : `);

  console.log(`Answer provided by you: ${providedAnswer}`);

  if (providedAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(`Current score is: ${chalk.green(score)}`);
  }
  else {
    console.log(`Current score is: ${chalk.red(score)}`);
  }

  console.log("---------\n");
}

const quesAndAns = [
    {
        question: "Why is Bengaluru known as the ‘Silicon Valley of India’?",
        answer: 'IT',
    },
    {
        question: 'What is India’s Golden Quadrilateral?',
        answer: 'National Highway',
    },
    {
        question: "Which city of India would you be in if you are visiting the Victoria Memorial?",
        answer: 'Kolkata',
    },
    {
        question: 'The city of Amritsar is famous for which holy destination?',
        answer : 'Golden Temple',
    },
    {
        question: 'Located on the west coast of India, what is Goa most famous for?',
        answer : 'Beaches',
    }
];


quesAndAns.forEach((quesAnsPair) => {
    let { question, answer } = quesAnsPair;

    play(question, answer);
});

console.log(`You scored : ${chalk.yellow(score)}`);

console.log(chalk.green("......Scoreboard........"));
console.log(`${highestScore.name}-${highestScore.score}`);
console.log(`${secondHighestScore.name}-${secondHighestScore.score}`);