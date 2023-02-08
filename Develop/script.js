// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
    var criteria = prompt("Please select which criteria to include in your password:");
    var length = prompt("Please choose a length for your password between 8 and 128 characters:");
    var lowerCase = prompt("Please select if you'd like to include lower case letters:");
    var upperCase = prompt("Please select if you'd like to include upper case letters:");
    var numbers = prompt("Please select if you'd like to include numbers:");
    var specialChar= prompt("Please select if you'd like to include special characters:");

    console.log("")
    console.log("Password length: " + length);
    console.log("Lower case letters: " + lowerCase);
    console.log("Upper case letters: " + upperCase);
    console.log("Numbers: " + numbers);
    console.log("Special characters: " + specialChar);
} 


