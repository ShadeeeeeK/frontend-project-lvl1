#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const calc = () => {
  const getRandomNum = (min, max) => {
    const minNumber = Math.ceil(min);
    const maxNumber = Math.floor(max);
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  };
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
  for (let i = 0; i < 3; i += 1) {
    const numberOne = getRandomNum(1, 30);
    const numberTwo = getRandomNum(1, 10);
    const operations = ['+', '-', '*'];
    const numberOperation = getRandomNum(0, 3);
    const correctAnswer = calculateResult(
      numberOne,
      numberTwo,
      operations[numberOperation],
    );
    console.log(
      `Question: ${numberOne} ${operations[numberOperation]} ${numberTwo}`,
    );
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === +userAnswer && i !== 2) {
      console.log('Correct!');
    } else if (correctAnswer === +userAnswer && i === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`,
      );
      break;
    }
  }
};
calc();
