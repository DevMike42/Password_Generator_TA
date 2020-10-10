// Target HTML
// ====================================================
const generateBtn = document.querySelector('#generate');


// Global Variables
// ====================================================
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
console.log(getRandomChar(lowerCasedChars));
