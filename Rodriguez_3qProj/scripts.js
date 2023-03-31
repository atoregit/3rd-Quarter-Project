function changeBg1() {
    document.getElementById("inputname").style.cssText = "background-color:#e4e4e4;"
    document.getElementById("inputpass").style.cssText = "background-color:#ffffff;"
}

function changeBg2() {
    document.getElementById("inputpass").style.cssText = "background-color:#e4e4e4;"
    document.getElementById("inputname").style.cssText = "background-color:#ffffff;"
}

function recieveInput () {
    var username = document.getElementById("inputname").value; 
    var password = document.getElementById("inputpass").value;
    if (username == "" && password != "") {
        document.getElementById("unameTag").innerHTML = "Please enter your username.";
        document.getElementById("passwTag").innerHTML = "Password";
        console.log("Login Error");
    } else if (password == "" && username != "") {
        document.getElementById("passwTag").innerHTML = "Please enter your password.";
        document.getElementById("unameTag").innerHTML = "Username";
        console.log("Login Error");
    } else if (username == "" && password == "") {
        document.getElementById("passwTag").innerHTML = "Please enter your username and password.";
        document.getElementById("unameTag").innerHTML = "Please enter your username and password.";
        console.log("Login Error");
    } else {
        alert("You have logged in to FLAG!");
        document.getElementById("passwTag").innerHTML = "Password";
        document.getElementById("unameTag").innerHTML = "Username";
    }
}