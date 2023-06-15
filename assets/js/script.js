var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Assignment Code
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  //checking if input !is number
  if (Number.isNaN(length)) {
    alert('Password length must be a number')
    return null;
  }

  //checking if input !>= 7
  if (length < 8) {
    alert('Password length must be at least 8 characters')
  }

  //checking length input !> 128
  if (length > 128) {
    alert('Password length must be at most 128 characters');
    return null;
  }

  var specialCharacters = confirm('Confirm if you would like your password to contain special characters');

  var numericCharacters = confirm('Confirm if you would like your password to contain numeric characters');

  var upperCasedCharacters = confirm('Confirm if you would like your password to contain upper cased characters');

  var lowerCasedCharacters = confirm('Confirm if you would like your password to contain lower cased characters');

  if (!specialCharacters && !numericCharacters && !upperCasedCharacters && !lowerCasedCharacters) {
    alert('Minimum of 1 character type')
    return null;
  }


  var object = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    upperCasedCharacters: upperCasedCharacters,
    lowerCasedCharacters: lowerCasedCharacters
  }
  return object;
}

function randomElement(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var char = arr[index];
  return char;
}

function generatePassword() {
  const options = getPasswordOptions();

  if (!options) return null;

  var password = [];

  var approvedCharacters = [];
  var guaranteedCharacters = [];

  if (options.specialCharacters) {
    approvedCharacters = approvedCharacters.concat(specialCharacters);
    guaranteedCharacters.push(randomElement(specialCharacters));
  }

  if (options.numericCharacters) {
    approvedCharacters = approvedCharacters.concat(numericCharacters);
    guaranteedCharacters.push(randomElement(numericCharacters));
  }

  if (options.upperCasedCharacters) {
    approvedCharacters = approvedCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(randomElement(upperCasedCharacters));
  }

  if (options.lowerCasedCharacters) {
    approvedCharacters = approvedCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(randomElement(lowerCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var char = randomElement(approvedCharacters);
    password.push(char);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i];
  }

  return password.join('');
  // console.log(options);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
