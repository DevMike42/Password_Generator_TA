// Target HTML
// ====================================================
const generateBtn = document.querySelector('#generate');


// Global Variables
// ====================================================
const lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

const numericChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Functions
// ====================================================

// Get random item from an array
const getRandomChar = function (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];

  return randomItem;
};

const getRandomIndex = function (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return randomIndex;
};

// Generate password options
const generatePasswordOptions = function () {

  const lengthInput = parseInt(prompt('Enter the number of characters you would like your password to contain'));

  const hasLowercaseCharsInput = confirm('Click OK to confirm including lowercase characters');

  const hasUppercaseCharsInput = confirm('Click OK to confirm including uppercase characters');

  const hasSpecialCharsInput = confirm('Click OK to confirm including special characters');

  const hasNumericCharsInput = confirm('Click OK to confirm including numeric characters');

  if (isNaN(lengthInput) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (lengthInput < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  if (lengthInput > 128) {
    alert('Password must not exceed 128 characters');
    return;
  }

  if (
    hasLowercaseCharsInput === false &&
    hasUppercaseCharsInput === false &&
    hasNumericCharsInput === false &&
    hasSpecialCharsInput === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  const passwordOptions = {
    length: lengthInput,
    hasSpecialChars: hasSpecialCharsInput,
    hasNumericChars: hasNumericCharsInput,
    hasLowercaseChars: hasLowercaseCharsInput,
    hasUppercaseChars: hasUppercaseCharsInput
  };

  return passwordOptions;
};

// Generate password
const generatePassword = function () {
  const options = generatePasswordOptions();

  // Array for storing result
  const result = [];

  // Array for storing characters to include in password
  // based on user desired options
  let possibleCharsArr = [];

  // Array for storing 1 of each type of character to 
  // ensure that type of character will be included
  let guaranteedChars = [];

  // Checks each type approved by user and adds chars to each char array
  if (options.hasLowercaseChars) {
    possibleCharsArr = possibleCharsArr.concat(lowercaseChars);
    guaranteedChars.push(getRandomChar(lowercaseChars));
  }

  if (options.hasUppercaseChars) {
    possibleCharsArr = possibleCharsArr.concat(uppercaseChars);
    guaranteedChars.push(getRandomChar(uppercaseChars));
  }

  if (options.hasNumericChars) {
    possibleCharsArr = possibleCharsArr.concat(numericChars);
    guaranteedChars.push(getRandomChar(numericChars));
  }

  if (options.hasSpecialChars) {
    possibleCharsArr = possibleCharsArr.concat(specialChars);
    guaranteedChars.push(getRandomChar(specialChars));
  }

  // Loop iterates through password length from options object,
  // selecting random indices from possibleCharsArr and inserts 
  // them into the password result
  for (let i = 0; i < options.length; i++) {
    const possibleChars = getRandomChar(possibleCharsArr);
    result.push(possibleChars);
  }

  // Mixes in at least 1 of each guaranteed char into the result
  for (let i = 0; i < guaranteedChars.length; i++) {
    let randomIndex = getRandomIndex(result)
    result[randomIndex] = guaranteedChars[i];
  }

  // Returns the result converted to a string
  return result.join('');
};

// Display password in html
const displayPassword = function () {
  const password = generatePassword();
  const passwordText = document.getElementById('password');

  passwordText.value = password;
};


// Event Listeners
// ====================================================
generateBtn.addEventListener('click', displayPassword);
