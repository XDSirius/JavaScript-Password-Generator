// Assignment code here
lowercaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
uppercaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["1","2","3","4","5","6","7","8","9","0"];
specialCharacters = ["!","@","#","$","%","^","&","*"];

function generatePassword(passwordLength,lowercase,uppercase,numbers,characters){
  passwordLength = prompt("How long do you want your password to be? Choose between 8 and 128 characters");
//TAKES DESIRED LENGTH AND CHECKS IF IT MEETS CRITERIA
  if (passwordLength < 8 || passwordLength > 129){
    console.log("Invalid Amount");
  } else {
    return passwordLength;
      }

//ASK CLIENT IF THEY WANT LOWERCASE LETTERS 
  lowercase = prompt("Do you want lowercase letters in your password? Type 'y' or 'yes' OR 'n' 'no'");
  lowercase = lowercase.toUpperCase();
  if (lowercase === "YES" || lowercase === "Y"){
    console.log("There will be lowercase letters in your password");
    //????????????????????????
  }else if (lowercase ==="NO" || lowercase ==="N"){
    console.log("There will be no lowercase letters in your password!");
  }else{
      console.log("Invalid Input");
    }
//ASK CLIENT IF THEY WANT UPPERCASE LETTERS 
  uppercase = prompt("Do you want uppercase letters in your password? Type 'y' or 'yes' OR 'n' 'no'");
  uppercase = lowercase.toUpperCase();
  if (uppercase === "YES" || uppercase === "Y"){
    console.log("There will be uppercase letters in your password");

  }else if (uppercase ==="NO" || uppercase ==="N"){
    console.log("There will be no uppercase letters in your password!");
  }else{
      console.log("Invalid Input");
    }

//ASK CLIENT IF THEY WANT NUMBERS 
  numbers = prompt("Do you want any numbers in your password? Type 'y' or 'yes' OR 'n' 'no'");
  numbers = numbers.toUpperCase();
  if (numbers === "YES" || numbers === "Y"){
    console.log("There will be numbers in your password");

  }else if (numbers ==="NO" || numbers ==="N"){
    console.log("There will be no numbers in your password!");
  }else{
      console.log("Invalid Input");
    }

//ASK CLIENT IF THEY WANT SPECIAL CHARACTERS
  characters = prompt("Do you want any special characters in your password?");
  characters = characters.toUpperCase();
  if (characters === "YES" || characters === "Y"){
    console.log("There will be characters in your password");

  }else if (numbers ==="NO" || numbers ==="N"){
    console.log("There will be at least 1 character  in your password!");
  }else{
      console.log("Invalid Input");
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



  