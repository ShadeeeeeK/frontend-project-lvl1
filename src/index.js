import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (description, generateGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  const maxCountMove = 3;
  for (let i = 0; i < maxCountMove; i += 1) {
    const questionAnswer = generateGame();
    const number = car(questionAnswer);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(questionAnswer);
    if (userAnswer !== correctAnswer) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`,
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
