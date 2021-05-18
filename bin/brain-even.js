#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNum = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

const isEvenOdd = (num) => num % 2 === 0;
const even = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(1, 30);
    const correctAnswer = isEvenOdd(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer && i !== 2) {
      console.log('Correct!');
    } else if (userAnswer === correctAnswer && i === 2) {
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
even();
