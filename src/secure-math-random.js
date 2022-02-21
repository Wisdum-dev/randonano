const crypto = require('crypto');

const secureMathRandom = () => Number(`0.${crypto.randomBytes(4).readUInt32LE()}`);

module.exports = secureMathRandom;