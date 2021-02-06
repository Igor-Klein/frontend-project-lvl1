import readlineSync from 'readline-sync';
import getName from '../cli.js';

const getRandomIntegerValue = () => {
  const minValue = 1;
  const maxValue = 1000;

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
const isEven = (num) => num % 2 === 0;
const getAnswer = (value) => (isEven(value) ? 'yes' : 'no');

const getEvenGame = () => {
  const userName = getName();
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  const countTrueAnswers = 3;

  for (let i = 1; i <= countTrueAnswers; i += 1) {
    const value = getRandomIntegerValue();
    console.log(`Question: ${value}`);
    const answer = getAnswer(value);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default getEvenGame;
