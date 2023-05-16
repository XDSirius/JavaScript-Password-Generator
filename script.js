let lowercaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];
let specialCharacters = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
let pool =[];

function generatePassword(passwordLength,lowercase,uppercase,numbers,characters){

//TAKES DESIRED LENGTH AND CHECKS IF IT MEETS CRITERIA
  passwordLength = prompt("How long do you want your password to be? Choose between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Invalid Amount");
    return;
//CHECKS IF INPUT IS A NUMBER OR NOT
  }else if (isNaN(passwordLength)){
    window.alert("Not a number");
    return;
  }else {
    desiredAmount = passwordLength;
      }

//ASK CLIENT IF THEY WANT LOWERCASE LETTERS 
  lowercase = prompt("Do you want lowercase letters in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO").toUpperCase();

  //lowercase = lowercase.toUpperCase();
  if (lowercase === "YES" || lowercase === "Y"){
    //ADDS ARRAY TO POOL ARRAY
    pool = pool.concat(lowercaseAlphabet);
  }else if (lowercase ==="NO" || lowercase ==="N"){
    window.alert("There will be no lowercase letters in your password!");
  }else{
      console.log("Invalid Input");
      return;
    }

//ASK CLIENT IF THEY WANT UPPERCASE LETTERS 
  uppercase = prompt("Do you want uppercase letters in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO").toUpperCase();

  if (uppercase === "YES" || uppercase === "Y"){
    pool = pool.concat(uppercaseAlphabet);
  }else if (uppercase ==="NO" || uppercase ==="N"){
    window.alert("There will be no uppercase letters in your password!");
  }else{
    window.alert("Invalid Input");
    return;
    }

//ASK CLIENT IF THEY WANT NUMBERS 
  numbers = prompt("Do you want any numbers in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO").toUpperCase();

  if (numbers === "YES" || numbers === "Y"){
    pool = pool.concat(numbers);
  }else if (numbers ==="NO" || numbers ==="N"){
    window.alert("There will be no numbers in your password!");
  }else{
    window.alert("Invalid Input");
    return;
    }


//ASK CLIENT IF THEY WANT SPECIAL CHARACTERS
  characters = prompt("Do you want any special characters in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO").toUpperCase();

  if (characters === "YES" || characters === "Y"){
    pool = pool.concat(specialCharacters);
  }else if (characters ==="NO" || characters ==="N"){
    window.alert("There will be at least no special characters  in your password!");
  }else{
    window.alert("Invalid Input");
    return;
    }
    
//CHECKS IF ALL CRITERIA WAS SELECTED AS NO 
  if ((lowercase === "NO" || lowercase == "N") &&
      (uppercase === "NO" || uppercase == "N") &&
      (numbers === "NO" || numbers == "N") &&
      (characters === "NO" || characters == "N")){
        window.alert("You must select at least one character");
        return;
      }else{
        return passwordWord();
      }
}


//FUNCTION TO ADD STRING TO EMPTY ARRAY DEPENDANT ON WHICH ARRAYS WERE ADDED TO PULL AND THE DESIRED AMOUNT FOR PASSWORD LENGTH
function passwordWord(){
  let passwordString = [];
  for (let x =0; x < desiredAmount; x++){
    letter = Math.floor(Math.random() * pool.length);
    passwordString = passwordString + pool[letter];
    }
    return passwordString;
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
