export const calculate = (operator, firstValue, secondValue) => {
  switch (operator) {
    case '-':
      return firstValue - secondValue;
    case '+':
      return firstValue + secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
};

export const getRandomValue = (maxValue = 1000) => {
  const minValue = 1;

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

export const getGcd = (firstValue, secondValue) => {
  if (!secondValue) return firstValue;

  return getGcd(secondValue, firstValue % secondValue);
};
