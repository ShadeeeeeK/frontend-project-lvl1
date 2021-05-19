/* eslint-disable operator-linebreak */
import { cons } from '@hexlet/pairs';
import play from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (one, two) => {
  const iter = one > two ? two : one;
  let result = 0;
  for (let i = iter; i > 0; i -= 1) {
    if (one % i === 0 && two % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const generatePlay = () => {
  const numberOne = getRandomNum(1, 100);
  const numberTwo = getRandomNum(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = greatestCommonDivisor(numberOne, numberTwo);
  const correctAnswerToString = correctAnswer.toString();
  return cons(question, correctAnswerToString);
};

export default () => play(description, generatePlay);
