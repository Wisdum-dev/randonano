const randonano = () => {
    const { hrtime } = require('process');
    const randomize = require('randomatic');

    const randomizeNumbers = randomize('0', 4);
    const multiply = Math.floor(Math.random() * hrtime.bigint().toString() * `${randomizeNumbers}`);

    let convertToString = multiply.toString();

    const randomizeCharacters = randomize('?', 3, {
        chars: '~!@#$%^&()_+-={}[];,."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyêzɕʤð৲¤&⁓~‾:⁾↝⨉ΘΞχᾞᾚἰÆæ',
    });
    const randomizeDigits = randomize('0', 1);

    console.log(convertToString.replaceAll(`${randomizeDigits}`, `${randomizeCharacters}`));
};

randonano();
