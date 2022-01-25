// Import the encryptors functions here.
const encryptors = require('./encryptors.js');

const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
let firstEncryption = caesarCipher(str, amount = 15);
let secondEncryption = symbolCipher(firstEncryption);
let thirdEncryption = reverseCipher(secondEncryption);
let fourthEncryption = caesarCipher(thirdEncryption, amount = 7);
return fourthEncryption;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  let firstDecryption = caesarCipher(str, amount = -7);
  let secondDecryption = reverseCipher(firstDecryption);
  let thirdDecryption = symbolCipher(secondDecryption);
  let fourthDecryption = caesarCipher(thirdDecryption, amount = -15);
  return fourthDecryption
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);