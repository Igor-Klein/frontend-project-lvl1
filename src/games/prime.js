import getGame from '../index.js';
import { getRandomValue, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getAnswer = (value) => (isPrime(value) ? 'yes' : 'no');

const getGameData = () => {
  const maxValue = 100;
  const question = getRandomValue(maxValue);
  const answer = getAnswer(question);

  return [question, answer];
};

const runGame = () => getGame(description, getGameData);

export default runGame;
