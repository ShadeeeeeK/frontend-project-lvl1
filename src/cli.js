import readlineSync from 'readline-sync';

export const sayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}`);
};

export default sayHi;
