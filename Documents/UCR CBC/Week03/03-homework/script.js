var specialCharacters = ['@', '%', '+', "\\", '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
var lowerCasedCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  
var upperCasedCharacters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  
var password = [];
 
var passwordCharacters = [];
  
var passwordConfiguration = {
    length: 12,
    hasSpecial: true,
    hasNumeric: true,
    hasLower: true,
    hasUpper: true,
  };
  
function generatePassword() {
    
     if (passwordConfiguration.hasLower) {
      
      passwordCharacters.push(lowerCasedCharacters);

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
      );
    }
  
    for (var i = password.length; i < passwordConfiguration.length; i++) {

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
  