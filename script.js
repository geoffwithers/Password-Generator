

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
// generates a random special character using a string
function getRandomSpecialChar() {
  const specialChars = "!@#$%^&*(){}[]=<>/,.";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

//function to combine the criteria into a password
function generatePassword() {
  //the empty string that will be the combined criteria
  var finalPassword = "";
  
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

  //this makes the prompts in the window, asking if you'd like to include the following options.
  var lowerCaseChoice = window.confirm("Would you like to include lower case letters?");
  var upperCaseChoice = window.confirm("Would you like to include upper case letters?");
  var numbersChoice = window.confirm("Would you like to include numbers? ");
  var specialCharChoice = window.confirm("Would you like to include special characters?");

  //this combines the criteria, and limits the length to the lengthChoice
  for (let i = 0; i < lengthChoice; i++) {
  
  if (lowerCaseChoice && finalPassword.length < lengthChoice) {
    finalPassword = finalPassword + getRandomLowerCase();
  }

  if (upperCaseChoice && finalPassword.length < lengthChoice) {
    finalPassword = finalPassword + getRandomUpperCase();
  }
  
  if (numbersChoice && finalPassword.length < lengthChoice) {
    finalPassword = finalPassword + getRandomNumber();
  }
  
  if (specialCharChoice && finalPassword.length < lengthChoice) {
    finalPassword = finalPassword + getRandomSpecialChar();
  }
}
   
  // now trying to console.log the responses, for the length entered and if they say yes.
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    console.log(+lengthChoice);
  }

 
  return finalPassword
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 



  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
