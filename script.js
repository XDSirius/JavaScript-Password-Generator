// Assignment code here


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
  } else {
    desiredAmount = passwordLength;
      }

//ASK CLIENT IF THEY WANT LOWERCASE LETTERS 
  lowercase = prompt("Do you want lowercase letters in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO");
  //TURNS INPUT TO ALL UPPERCASE
  lowercase = lowercase.toUpperCase();
  if (lowercase === "YES" || lowercase === "Y"){
    //console.log("There will be lowercase letters in your password");
    //ADDS ARRAY TO POOL ARRAY
    pool = pool.concat(lowercaseAlphabet);


  }else if (lowercase ==="NO" || lowercase ==="N"){
    window.alert("There will be no lowercase letters in your password!");
  }else{
      console.log("Invalid Input");
      return;
    }

  

    


//ASK CLIENT IF THEY WANT UPPERCASE LETTERS 
  uppercase = prompt("Do you want uppercase letters in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO");
  uppercase = lowercase.toUpperCase();
  if (uppercase === "YES" || uppercase === "Y"){
    //window.alert("There will be uppercase letters in your password");
    pool = pool.concat(uppercaseAlphabet);


  }else if (uppercase ==="NO" || uppercase ==="N"){
    window.alert("There will be no uppercase letters in your password!");
  }else{
    window.alert("Invalid Input");
    return;
    }

//ASK CLIENT IF THEY WANT NUMBERS 
  numbers = prompt("Do you want any numbers in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO");
  numbers = numbers.toUpperCase();
  if (numbers === "YES" || numbers === "Y"){
   // window.alert("There will be numbers in your password");
    pool = pool.concat(numbers);
    

  }else if (numbers ==="NO" || numbers ==="N"){
    window.alert("There will be no numbers in your password!");
  }else{
    window.alert("Invalid Input");
    return;
    }


//ASK CLIENT IF THEY WANT SPECIAL CHARACTERS
  characters = prompt("Do you want any special characters in your password? Type 'y' or 'yes' for YES. Type 'n' or 'no' for NO");
  characters = characters.toUpperCase();
  if (characters === "YES" || characters === "Y"){
    //window.alert("There will be characters in your password");
    pool = pool.concat(specialCharacters);

  }else if (characters ==="NO" || characters ==="N"){
    window.alert("There will be at least no special characters  in your password!");
  }else{
    window.alert("Invalid Input");
    return;
    }


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
