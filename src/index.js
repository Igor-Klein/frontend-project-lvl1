import readlineSync from 'readline-sync';
import getName from './cli.js';

const ROUNDS_COUNT = 3;

const getGame = (description, getGameData) => {
  const userName = getName();
  console.log(description);

  for (let i = 1; i <= ROUNDS_COUNT; i += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default getGame;
