const passwordBox = document.getElementById('password');
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol = "@#$%&^&*()+_|{}[]<>/=.";
const allChars = upperCase +lowerCase + number+ symbol

function createPassword(){
    let password = "";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
    
} 
function copyPassword() {
    
    var range = document.createRange();
    range.selectNode(passwordBox);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        // Execute the copy command
        document.execCommand("copy");
        console.log('Password copied to clipboard' , passwordBox.value);
    } catch (err) {
        console.error('Unable to copy password to clipboard', err);
    } finally {
        // Clear the selection
        window.getSelection().removeAllRanges();
    }
}

