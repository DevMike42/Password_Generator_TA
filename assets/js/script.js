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

// Generate password options
const generatePasswordOptions = function () {

  const lengthInput = parseInt(prompt('Enter the number of characters you would like your password to contain'));

  const hasLowerCaseCharsInput = confirm('Click OK to confirm including lowercase characters');

  const hasUpperCaseCharsInput = confirm('Click OK to confirm including uppercase characters');

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
    hasLowerCaseCharsInput === false &&
    hasUpperCaseCharsInput === false &&
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
    hasLowerCaseChars: hasLowerCaseCharsInput,
    hasUpperCaseChars: hasUpperCaseCharsInput
  };
};

// Generate password
const displayPassword = function () {
  const password = generatePassword();

  const passwordText = document.querySelector('#password');

  passwordText.value = password;
};




// Event Listeners
// ====================================================
generateBtn.addEventListener('click', displayPassword);


// Function Tests
// ====================================================
console.log(generatePasswordOptions());
