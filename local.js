let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');

let admin = document.getElementById('admin');
let member = document.getElementById('member');

let loginButton = document.getElementById('loginbutton');

function onLogin () {
    console.log('tombol di click');
    console.log(usernameInput.value);
    console.log(passwordInput.value);


    
    if(usernameInput.value == 'admin' && passwordInput.value == "admin124") {
        alert ('lu adin');
    }  else {
        alert ('lu member');
    }
}
