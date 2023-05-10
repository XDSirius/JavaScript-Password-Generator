// Assignment code here
lowercaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
uppercaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["1","2","3","4","5","6","7","8","9","0"];
specialCharacters = ["!","@","#","$","%","^","&","*"];

function generatePassword(length,lowercase,uppercase,numbers,characters){
  console.log("How long do you want your password to be? Choose between 8 and 128 characters")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
