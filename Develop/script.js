// Assignment code here
lowercaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
uppercaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["1","2","3","4","5","6","7","8","9","0"];
specialCharacters = ["!","@","#","$","%","^","&","*"];

function generatePassword(passwordLength,lowercase,uppercase,numbers,characters){
  let pLenght = prompt("How long do you want your password to be? Choose between 8 and 128 characters");

  if (pLenght < 8 || pLenght > 129){
    console.log("Invalid Amount");
  } else {
    console.log("The length of choise is " + pLenght);
      }
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


  //let lowercase = prompt("Do you want lowercase letters in your password?");
  //let uppercase = prompt("Do you want uppercase letters in your password?");
  //let numbers = prompt("Do you want any numbers in your password?");
  //let characters = prompt("Do you want any special characters in your password?");