// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// // VARIABLES
// //===============================================
var userChoices= { 
    wantUpper: function() {
    confirm ("Do you want to use uppercase characters in your password?");
    },
    wantLower: function() {
        confirm ("Do you want to use lowercase characters in your password?");
    },
    wantNumeric: function() {
         confirm ("Do you want to use numeric characters in your password?");
    },
    wantSpecial: function() {
        confirm ("Do you want to use special characters in your password?");
    }
}



// // FUNCTIONS
// //================================================
// function logUserChoices() {
//     console.log(userChoices.wantUpper);
//     console.log(userChoices.wantLower);
//     console.log(userChoices.wantNumeric);
//     console.log(userChoices.wantSpecial);
// }
function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
function getRandomSymbol() {
    var symbol = ["!@#$%^&*(){}[]=<>/,.|~?"];
    return symbol(Math.floor(Math.random)() * symbol.length);
}
function passCharCount(x) {
    if (x < 8 || x > 128) {
        alert("You must pick a number between 8 and 128");
    }
    else (x >= 8 || x <= 128);
    console.log(document.getElementById("password"));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MAIN PROCESS
//===========================================
passwordText= prompt("How long do you want your password to be?");{
    passCharCount(passwordText);{
    console.log(passwordText);
    }
}

//If wantUpper run get randomUppercase function
//If wantLower run get randomLowercase function
