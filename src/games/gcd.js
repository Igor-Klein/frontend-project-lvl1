import getGame from '../index.js';
import { getRandomValue, getGcd } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const maxValue = 100;
  const firstValue = getRandomValue(maxValue);
  const secondValue = getRandomValue(firstValue);
  const question = `${firstValue} ${secondValue}`;
  const answer = getGcd(firstValue, secondValue);

  return [question, answer.toString()];
};

const runGame = () => getGame(description, getGameData);

export default runGame;
