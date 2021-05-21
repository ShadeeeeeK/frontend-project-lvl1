import { cons } from '@hexlet/pairs';
import play from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';
const arithmeticProgression = (number) => {
  const progressioNum = getRandomNum(1, 10);
  let startNum = number;
  let result = `${startNum}`;
  for (let i = 0; i < 9; i += 1) {
    startNum += progressioNum;
    result += ` ${startNum}`;
  }
  return result;
};

const generatePlay = () => {
  const randomNum = getRandomNum(1, 10);
  const startNumProgression = getRandomNum(1, 60);
  const middleAnswer = arithmeticProgression(startNumProgression).split(' ');
  const correctAnswer = middleAnswer[randomNum];
  middleAnswer[randomNum] = '..';
  const question = middleAnswer.join(' ');
  return cons(question, correctAnswer);
};

export default () => play(description, generatePlay);
