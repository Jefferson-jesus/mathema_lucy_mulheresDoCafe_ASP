
(function(d, s, id){
	 var js, fjs = d.getElementsByTagName(s)[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement(s); js.id = id;
	 js.src = "//connect.facebook.net/pt_BR/sdk.js";
	 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function info(){
	FB.api('/me', 'GET', {fields:'picture'}, function(response){
		console.log(response);
		document.getElementById('profilePic').innerHTML='<img src="'+response.picture.data.url+'" id="profilePic" class="img-responsive img-circle profilePic" alt="Responsive image">';
	})
}

 function login(){
	 FB.login(function(response){
		 if(response.status === 'connected'){
			document.getElementById('profilePic').innerHTML='Bem vindo!';
			window.location='home.html';
			return false
		}else if(response.status === 'not-authorized'){
			document.getElementById('profilePic').innerHTML='Falha na conexão';
			return false
		}else{
			document.getElementById('profilePic').innerHTML='Você não está conectado ao Facebook.';
			return false
		}
	 });
 }
