
var host = "http://201.39.92.61:3000";
var signInPath= "/services/user/signin/";

function doLogin(username, password){
var req = new XMLHttpRequest();
req.open("POST", host+signInPath, true);

req.onload = function () {
console.log(this.responseText);
};

//Funciona assim:
/*
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send('username='+username+'&password='+password);
*/

//Ou assim:
req.setRequestHeader("Content-type", "application/json");
req.send(JSON.stringify({username: username, password: password}));

}

doLogin("admin", "admin@123")
