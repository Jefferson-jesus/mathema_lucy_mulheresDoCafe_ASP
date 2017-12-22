var signHost = "http://52.176.43.120:3000/services/user/signin/";
var attempt = 7 // contador de tentativas
var adminHome = "users/facilita/home.html";
var entrepeneurHome = "users/empresa/home.html";
var email, password = "";

function setUserPass(){
	email = document.loginForm.Email.value;
	password = document.loginForm.Password.value;
}

function logIn(){
	setUserPass();
	logValidator(email, password);
}

function logValidator(email, password){

		var loginRequest = new XMLHttpRequest();
		loginRequest.open('POST', signHost, true);

		loginRequest.onload = function(){
			var loginData = JSON.parse(loginRequest.responseText);
			// console.log(email);
			// console.log(password);
			// console.log(loginData);
			if(attempt == 0){
				document.getElementById('displayMsg').innerHTML = "Acesso bloqueado";
				document.getElementById('btn-enter').disabled = true;
				return false;
			}

			if(loginData.message == "Invalid username or password"){
				if(attempt > 1){
					attempt--;
					document.getElementById('displayMsg').innerHTML = "Nome de usuário ou senha incorretos<br>"+"Você tem "+ attempt +" tentativas para tentar novamente.";
				} else{
					document.getElementById('displayMsg').innerHTML = "Nome de usuário ou senha incorretos<br>"+"Após esta tentativa, seu acesso será<br>temporariamente bloqueada.";
					attempt--;
				}
			} else if(loginData.profile[0]){
								window.location = adminHome; //add specific admin home
							} else{
								window.location = entrepeneurHome; //add specific entrepeneur home
							}

		}
		loginRequest.setRequestHeader("Content-type", "application/json");
		loginRequest.send(JSON.stringify({email: email, password: password}));
}
