var host = "http://52.176.43.120:3000";
var path= "/services/user/signUp/";


var request = new XMLHttpRequest();
if(request.readyState==0 || request.readyState==4){
	request.open("GET", host+path);
	request.setRequestHeader("Content-type", "application/json");
	console.log(request.responseText);
	var data = JSON.parse(request.responseText)
	createHTML(data);
	request.send();

	function createHTML(body){
		var raw = document.getElementById("homeCoffeeCard").innerHTML;
		var compiled = Handlebars.compile(raw);
		var generated = compiled(body);
		var container = document.getElementById("bodyContainer");
		container.innerHTML = generated;
	}
}

// <div class="panel-body homeCard" type="button" data-toggle="modal" data-target="#homeCoffeeModal1">
// 	<div class="col-md-2 col-sm-2 col-xs-2 homeCard-left">
// 		<h4>14:00</h4>
// 		<p>Terça-feira<br>13 de Junho</p>
// 	</div>
// 	<div class="col-md-5 col-sm-5 col-xs-5 homeCard-center">
// 		<p>Facilitadora da Silva</p>
// 		<h4>Mathema All You Can Eat Happy Coffee (ID)</h4>
// 		<h5>Doces e Salgados</h5>
// 	</div>
// 	<div class="col-md-5 col-sm-5 col-xs-5 homeCard-right">
// 		<div class="col-md-6 col-sm-6 col-xs-6">
// 			<p>Produto</p>
// 			<p>Produto</p>
// 			<p>Produto</p>
// 			<p>Produto</p>
// 		</div>
// 		<div class="col-md-6 col-sm-6 col-xs-6">
// 			<p>Produto</p>
// 			<p>Produto</p>
// 			<p>Produto</p>
// 			<p>Produto</p>
// 		</div>
// 	</div>
// </div>
