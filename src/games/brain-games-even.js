/* eslint-disable operator-linebreak */
import { cons } from '@hexlet/pairs';
import play from '../index.js';
import getRandomNum from '../utils.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenOdd = (num) => num % 2 === 0;
const generatePlay = () => {
  const number = getRandomNum(1, 30);
  const correctAnswer = isEvenOdd(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};
export default () => play(description, generatePlay);
