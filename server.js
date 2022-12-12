function myfunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
function validate() {
    var password = document.getElementById("pass");
    var length = document.getElementById("length");
    if (password.value.length >= 8) {
        alert("login Succesfull");
        // window.location.href = 'newpage.html';
        // window.location.assign = 'newpage.html';
        // window.location.replace('newpage.html');
        window.open('newpage.html')
        return false;

    }
    else {
        alert("login  failed Succesfull");
    }
}

