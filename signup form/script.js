
var username = document.getElementById('username')

function validateUsername() {
    var username = document.getElementById('usernameInput').value;
    var validationMessage = document.getElementById('validationMessage');

    // Check if username is at least 3 characters long
    if (username.length >= 3) {
        validationMessage.innerText = "Username is valid!";
        validationMessage.style.color = "green";
    } else {
        validationMessage.innerText = "Username must be at least 3 characters.";
        validationMessage.style.color = "red";
    }
}

function getvalue(event) {

    let value = event.target.value
    let result = passrexp.test(value)

    if (result) {
        err.style.visibility = 'hidden'
    }
    else {
        err.style.visibility = 'visible'
    }
}