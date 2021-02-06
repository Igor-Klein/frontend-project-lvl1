import _ from 'lodash';

import getGame from '../index.js';
import { getRandomValue, calculate } from '../utils.js';

const getOperator = () => _.sample(['+', '-', '*']);
const description = 'What is the result of the expression?';

const getGameData = () => {
  const maxValue = 10;
  const firstValue = getRandomValue(maxValue);
  const secondValue = getRandomValue(firstValue);
  const operator = getOperator();
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calculate(operator, firstValue, secondValue);

  return [question, answer.toString()];
};

const runGame = () => getGame(description, getGameData);

export default runGame;
