/* eslint-disable operator-linebreak */
import { cons } from '@hexlet/pairs';
import play from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What is the result of the expression?';

const calculateResult = (one, two, operations) => {
  let result;
  switch (operations) {
    case '+':
      result = one + two;
      break;
    case '-':
      result = one - two;
      break;
    case '*':
      result = one * two;
      break;
    default:
  }
  return result;
};

const generatePlay = () => {
  const numberOne = getRandomNum(1, 30);
  const numberTwo = getRandomNum(1, 10);
  const operations = ['+', '-', '*'];
  const numberOperation = getRandomNum(0, 3);
  const correctAnswer = calculateResult(
    numberOne,
    numberTwo,
    operations[numberOperation],
  );
  const correctAnswerToString = correctAnswer.toString();
  const question = `${numberOne} ${operations[numberOperation]} ${numberTwo}`;
  return cons(question, correctAnswerToString);
};

export default () => play(description, generatePlay);
