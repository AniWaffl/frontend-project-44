import readlineSync from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('Your answer: ');
    console.log(`Hello, ${userName}!`);
}