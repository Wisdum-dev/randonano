const secureMathRandom = require("./secure-math-random");

const generateRandomCharacters = (length, characters) => {
   let result = "";

   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(secureMathRandom() * characters.length));
   }

   return result;
};

module.exports = generateRandomCharacters;
