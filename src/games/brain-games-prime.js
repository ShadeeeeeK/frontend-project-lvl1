/* eslint-disable operator-linebreak */
import { cons } from '@hexlet/pairs';
import play from '../index.js';
import getRandomNum from '../utils.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

function generatePlay() {
  const number = getRandomNum(1, 100);
  const questionAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, questionAnswer);
}

export default () => play(description, generatePlay);
