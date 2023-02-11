

var randomFunction = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  specialchar: getRandomSpecialChar,
};


// Generator Functions:

// generates a random lower case letter using char codes
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// generates a random upper case letter using char codes
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// generates a random number using an array
function getRandomNumber() {
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  return numbers[Math.floor(Math.random() * numbers.length)];
}
// generates a random special character using a string/array
function getRandomSpecialChar() {
  const specialChars = "!@#$%^&*(){}[]=<>/,.";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

//console.log(getRandomLowerCase());
//console.log(getRandomUpperCase());
//console.log(getRandomNumber());
//console.log(getRandomSpecialChar());





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //can't figure out how to do the prompt to select which of the criteria to include in the password. 
  //need multiple checkboxes for length + uppercase + lowercase + numbers + special characters
  //just gonna do them one at a time with yes/no options

  //this makes a prompt to select the length
  var lengthChoice = window.prompt("Enter a character number for your password between '8' and '128':")
  if (!lengthChoice) {
    return;
  }
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    window.alert("Your password will contain " + lengthChoice + " characters.");
    var lengthAnswer = lengthChoice;
  } else {
    window.alert("please try again and enter a number between '8' and '128'")
  }

  //this makes a prompt asking if you want lower case letters, and alerts you the result.
  var lowerCaseChoice = window.prompt("Would you like to include lower case letters? Enter 'yes' or 'no':");
  if(!lowerCaseChoice) {
    return;
  }
  lowerCaseChoice= lowerCaseChoice.toUpperCase();
  if (lowerCaseChoice === "YES") {
    var hasLower = lowerCaseChoice;
    window.alert("Your password will include lower case letters.")
  } else {
    window.alert("Your password will not include lower case letters.")
  }
//prompt and alert for upper case letters
  var upperCaseChoice = window.prompt("Would you like to include upper case letters? Enter 'yes' or 'no':");
  if(!upperCaseChoice) {
    return;
  }
  upperCaseChoice= upperCaseChoice.toUpperCase();
  if (upperCaseChoice === "YES") {
    var hasUpper = upperCaseChoice;
    window.alert("Your password will include upper case letters.")
  } else {
    window.alert("Your password will not include upper case letters.")
  }
  //prompt and alert for numbers
  var numbersChoice = window.prompt("Would you like to include numbers? Enter 'yes' or 'no':");
  if(!numbersChoice) {
    return;
  }
  numbersChoice= numbersChoice.toUpperCase();
  if (numbersChoice === "YES") {
    var hasNumber = numbersChoice;
    window.alert("Your password will include numbers.")
  } else {
    window.alert("Your password will not include numbers.")
  }
  //prompt and alert for special characters
  var specialCharChoice = window.prompt("Would you like to include special characters? Enter 'yes' or 'no':");
  if(!specialCharChoice) {
    return;
  }
  specialCharChoice= specialCharChoice.toUpperCase();
  if (specialCharChoice === "YES") {
    var hasSpecialChar = specialCharChoice;
    window.alert("Your password will include special characters.")
  } else {
    window.alert("Your password will not include special characters.")
  }

  console.log(hasLower, lengthAnswer, hasUpper, hasNumber, hasSpecialChar);

  function generatePassword(lengthAnswer, hasLower, hasUpper, hasNumber, hasSpecialChar) {
    let generatedPassword = '';
    var typesArray = [lengthAnswer, hasLower, hasUpper, hasNumber, hasSpecialChar];
    console.log('typesArray: ', typesArray);
  }
 //test to see if the new variables that store results work
  //console.log(hasLower, lengthAnswer, hasUpper, hasNumber, hasSpecialChar);
  
  
  // now trying to console.log the responses, for the length entered and if they say yes.
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    console.log(+lengthChoice);
  }

  if (lowerCaseChoice === "YES") {
    console.log(getRandomLowerCase());
  }

  if (upperCaseChoice === "YES") {
    console.log(getRandomUpperCase());
  }

  if (numbersChoice === "YES") {
    console.log(getRandomNumber());
  }

  if (specialCharChoice === "YES") {
    console.log(getRandomSpecialChar());
  }


   
   
    //This code factors in the answers and generates a randomized PW
    //function generatePassword(lengthAnswer, hasLower, hasUpper, hasNumber, hasSpecialChar) {
     // var typesArray = [lengthAnswer, hasLower, hasUpper, hasNumber, hasSpecialChar];
      //console.log('typesArray: ', typesArray);
    //}
  //var password = generatePassword() 
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
 }
;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
