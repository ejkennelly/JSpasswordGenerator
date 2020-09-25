// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    //Beginning prompt requiring a number between 8 and 128 to run rest of code

    //While isValid is false, run password length requirements. Once isValid is true, move onto next block
    var isValid = false;
    do {
        var passLength = prompt("How long do you want your password to be?");
        passLength = parseInt(passLength);

        if ((passLength < 8) || (passLength > 128) || (isNaN(passLength)))
            alert("Must be a number between 8 and 128!");
        else
            isValid = true;

    } while (!isValid);

    //While isValid is false, run password options. Once true, move on
    isValid = false;
    do {
        // Password options/requirements
        var wantUpper = confirm("Do you want to use uppercase characters in your password?");
        var wantLower = confirm("Do you want to use lowercase characters in your password?");
        var wantNumeric = confirm("Do you want to use numeric characters in your password?");
        var wantSpecial = confirm("Do you want to use special characters in your password?");
        var result = [];

        //If no conditions are confirmed
        if ((wantUpper == false) && (wantLower == false) && (wantNumeric == false) && (wantSpecial == false))
            alert("You have to select at least one condition.");
        else
            isValid = true;
    } while (!isValid);


    // possible password value arrays
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", "|", "~", "?"];
    var returnVar = "";

    if ((passLength >= 8) && (passLength <= 128) && ((wantUpper == true) || (wantLower == true) || (wantNumeric == true) || (wantSpecial === true))) {
        if (wantUpper == true) {
            for (var i of upper)
                result.push(i);
        }
        if (wantLower == true) {
            for (var i of upper)
                //Makes upper array become lowercase letters
                result.push(i.toLowerCase(upper));
        }

        if (wantNumeric == true) {
            for (var i of numeric)
                result.push(i);
        }
        if (wantSpecial == true) {
            for (var i of specialChar)
                result.push(i);
        }
        for (var i = 0; i < passLength; i++)
            returnVar += result[Math.floor(Math.random() * result.length)];
    }

    return returnVar;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);