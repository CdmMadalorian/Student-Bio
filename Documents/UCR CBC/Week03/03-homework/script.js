var specialCharacters = ['@', '%', '+', "\\", '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  
var lowerCasedCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  
var upperCasedCharacters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
var password = [];
  
var passwordCharacters = [];
 
var passwordConfiguration = {
    length: 12, hasSpecial: true, hasNumeric: true, hasLower: true, hasUpper: true,
};
  
generatePassword = function( click(btn) FormData
    //Use if statements to check options for each password type
    if (passwordConfiguration.hasLower) {
      //push password character type array into passwordCharacters array.  This array will be used to generate the password
      passwordCharacters.push(lowerCasedCharacters);
      //push one lowercase character into the password array. This guarantees one of each type of character is used for the password.
      password.push(
        lowerCasedCharacters[
          Math.floor(Math.random() * lowerCasedCharacters.length)
        ]
      );
    }
    if (passwordConfiguration.hasSpecial) {
      passwordCharacters.push(specialCharacters);
      password.push(
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      );
    }
    if (passwordConfiguration.hasUpper) {
      passwordCharacters.push(upperCasedCharacters);
      password.push(
        upperCasedCharacters[
          Math.floor(Math.random() * upperCasedCharacters.length)
        ]
      );
    }
    if (passwordConfiguration.hasNumeric) {
      passwordCharacters.push(numericCharacters);
      password.push(
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
      );)
    }
    // The password already has one of each character type for the password
    // Now using a loop to fill out the rest of the password
  
    for (var i = password.length; i < passwordConfiguration.length; i++) {
      //Select one of the character types from the password Character array.
      var randomPasswordCharType =
        passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      //Randomly select a character from randomPasswordCharType and push it into the password.
      password.push(
        randomPasswordCharType[
          Math.floor(Math.random() * randomPasswordCharType.length)
        ]
      );
    }
  
    console.log(password);
    console.log(passwordCharacters);
  }
  
  generatePassword();
  