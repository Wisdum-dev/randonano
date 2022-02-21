const { hrtime } = require('process');
const generateRandomCharacters = require("./generate-random-characters")

const NUMBERS = '0123456789';
const CHARACTERS = '~!@#$%^&()_+-={}[];,."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyêzɕʤð৲¤&⁓~‾:⁾↝⨉ΘΞχᾞᾚἰÆæ';

const randonano = () => {
    const randomizeNumbers = generateRandomCharacters(3, NUMBERS);
    const multiply = Math.floor(Math.random() * hrtime.bigint().toString() * randomizeNumbers);

    let convertToString = multiply.toString();

    const randomizeCharacters = generateRandomCharacters(3, CHARACTERS);
    const randomizeDigits = generateRandomCharacters(1, NUMBERS);

    return convertToString.replaceAll(randomizeDigits, randomizeCharacters);
};

console.log(randonano());

// Idea by latsdev
