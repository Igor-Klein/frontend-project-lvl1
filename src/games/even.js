import getGame from '../index.js';
import { getRandomValue } from '../utils.js';

const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const isEven = (num) => num % 2 === 0;
const getAnswer = (value) => (isEven(value) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomValue();
  const answer = getAnswer(question);

  return [question, answer];
};

const runGame = () => getGame(description, getGameData);

export default runGame;
