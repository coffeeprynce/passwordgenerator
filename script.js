// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey you clicked the button")

  let password = '';
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let length = 8;


  for (i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random()
      * chars.length);

      password += chars.substring(randomNumber,
        randomNumber + 1);

  }
 document.getElementById('password').value = password;
  
  
  
  //display password on the page
return(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //prompt the user
  prompt("did you want to include numbers?")
  prompt("did you want to include special characters ?")
  console.log('password')

  };



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


