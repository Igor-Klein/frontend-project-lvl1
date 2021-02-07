import getGame from '../index.js';
import { getRandomValue } from '../utils.js';

const ELEMENT_COUNT = 10;
const description = 'Find the greatest common divisor of given numbers.';

const getProgression = (firstValue, summand) => {
  const array = [firstValue];
  for (let i = 1; i <= ELEMENT_COUNT; i += 1) {
    const value = array[i - 1] + summand;
    array.push(value);
  }

  return array;
};

const getQuestion = (progression, index) => {
  const newArray = [];

  for (let i = 0; i < ELEMENT_COUNT; i += 1) {
    if (i === index) {
      newArray.push('..');
    } else {
      newArray.push(progression[i]);
    }
  }

  return newArray.join(' ');
};

const getGameData = () => {
  const maxFirstValue = 10;
  const firstValue = getRandomValue(maxFirstValue);
  const maxSummandValue = 5;
  const summand = getRandomValue(maxSummandValue);
  const index = getRandomValue(ELEMENT_COUNT - 1);
  const progression = getProgression(firstValue, summand);

  const question = getQuestion(progression, index);
  const answer = progression[index];

  return [question, answer.toString()];
};

const runGame = () => getGame(description, getGameData);

export default runGame;
