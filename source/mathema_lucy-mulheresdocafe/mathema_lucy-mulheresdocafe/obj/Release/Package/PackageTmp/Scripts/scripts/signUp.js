
var host = "http://52.176.43.120:3000";
var signInPath= "/services/user/signUp/";
var signUpForm = document.getElementById("signUpForm");

var user = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	profile: [""],
	gender: "",
	birthDate: "",
	cpf: "",
	rg: "",
	entrepreneur: {
		companyName: "",
		companyFacebook: "",
		mei: false,
		nf: false,
		cnpj: "",
		detailedInformation: {
			children: false,
			childrenCount: 0,
			incomeResponsability: 100,
			internetAccess: true,
			culinaryTimeYear: 0,
			culinaryTimeMonth: 0,
			culinaryCourses: true,
			culinaryCoursesName: [""],
			peopleSupport: "",
			observation: "",
			objective: "",
			objectiveCompletion: "",
			messageToMDC: "",
			howMeetUs: ""
		}
	},
	contact: [
		{
			phone: "",
			facebook: "",
			businessPhone: "",
			mobilePhone: "",
			email: ""
		}
	],
	address: [
		{
			country: "",
			state: "",
			city: "",
			addressLine1: "",
			zip: ""
		}
	]
};

var email = "";
var password = "";
var passwordConfirmation = "";
var firstName = "";
var lastName = "";
var lastName = "";

signUpForm.onsubmit = function(evt){
	evt.preventDefault();
	signUp();
	signUpForm.reset();
};
function signUp(){
	email = document.getElementById("emailField").value;
	password = document.getElementById("passwordField").value;
	passwordConfirmation = document.getElementById("passwordConfimationField").value;
	firstName = document.getElementById("firstNameField").value;
	lastName = document.getElementById("lastNameField").value;
		testPass();
		var req = new XMLHttpRequest();
		if(req.readyState==0 || req.readyState==4){
			req.open("POST", host+signInPath, true);
			req.setRequestHeader("Content-type", "application/json");
			if(req.response == "Email in use") {
				document.getElementById("passwordMatch").innerHTML = "<h4>O E-Mail já está em uso</h4><br>";
				return false}
			req.send(JSON.stringify({email: email, password: password, firstName: firstName, lastName: lastName}));

		}else{
			setTimeout('process()',1000);
		}
	// req.onload = function () {
	// 	console.log(req.responseText);
	// 	if(req.status == 200){
	// 		var signUpData = JSON.parse(req.responseText);
	// 		testPass();
	// 	}
	// var signUpData = req;
	// signUpData.email = email;
	// signUpData.password = password;
	// signUpData.firstName = firstName;
	// signUpData.lastName = lastName;
	// console.log(req.responseText);
	// };
}

function registerEntrepeneur(){
	user.profile = document.getElementById("profileField").value;
	user.gender = document.getElementById("genderField").value;
	user.birthDate = document.getElementById("birthDateField").value;
	user.cpf = document.getElementById("cpfField").value;
	user.rg = document.getElementById("rgField").value;
	user.entrepeneur.companyName = document.getElementById("companyNameField").value;
	user.entrepeneur.companyFacebook = document.getElementById("companyFacebookField").value;
	user.entrepeneur.mei = document.getElementById("meiField").value;
	user.entrepeneur.nf = document.getElementById("nfField").value;
	user.entrepeneur.cnpj = document.getElementById("cnpjField").value;
	user.entrepeneur.detailedInformation.children = document.getElementById("childrenField").value;
	user.entrepeneur.detailedInformation.childrenCount = document.getElementById("childrenCountField").value;
	user.entrepeneur.detailedInformation.incomeResponsability = document.getElementById("incomeResponsabilityField").value;
	user.entrepeneur.detailedInformation.internetAccess = document.getElementById("internetAccessField").value;
	user.entrepeneur.detailedInformation.culinaryTimeYear = document.getElementById("culinaryTimeYearField").value;
	user.entrepeneur.detailedInformation.culinaryTimeMonth = document.getElementById("culinaryTimeMonthField").value;
	user.entrepeneur.detailedInformation.culinaryCourses = document.getElementById("culinaryCoursesField").value;
	user.entrepeneur.detailedInformation.culinaryCoursesName = document.getElementById("culinaryCoursesNameField").value;
	user.entrepeneur.detailedInformation.peopleSupport = document.getElementById("peopleSupportField").value;
	user.entrepeneur.detailedInformation.observation = document.getElementById("observationField").value;
	user.entrepeneur.detailedInformation.objective = document.getElementById("objectiveField").value;
	user.entrepeneur.detailedInformation.objectiveCompletion = document.getElementById("objectiveCompletionField").value;
	user.entrepeneur.detailedInformation.messageToMDC = document.getElementById("messageToMDCField").value;
	user.entrepeneur.detailedInformation.howMeetUs = document.getElementById("howMeetUsField").value;
	user.contact.phone = document.getElementById("phoneField").value;
	user.contact.facebook = document.getElementById("facebookField").value;
	user.contact.businessPhone = document.getElementById("businessPhoneField").value;
	user.contact.mobilePhone = document.getElementById("mobilePhoneField").value;
	user.contact.email = document.getElementById("emailField").value;
	user.address.country = document.getElementById("countryField").value;
	user.address.state = document.getElementById("stateField").value;
	user.address.city = document.getElementById("cityField").value;
	user.address.addressLine1 = document.getElementById("addressLine1Field").value;
	user.address.zip = document.getElementById("zipField").value;

	var req = new XMLHttpRequest();
	if(req.readyState==0 || req.readyState==4){
		req.open("POST", host+signInPath, true);
		req.setRequestHeader("Content-type", "application/json");
		req.send(JSON.stringify({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			profile: [user.profile],
			gender: user.gender,
			birthDate: user.birthDate,
			cpf: user.cpf,
			rg: user.rg,
			entrepreneur: {
				companyName: user.entrepreneur.companyName,
				companyFacebook: user.entrepreneur.companyFacebook,
				mei: user.entrepreneur.mei,
				nf: user.entrepreneur.nf,
				cnpj: user.entrepreneur.cnpj,
				detailedInformation: {
					children: user.entrepreneur.detailedInformation.children,
					childrenCount: user.entrepreneur.detailedInformation.childrenCount,
					incomeResponsability: user.entrepreneur.detailedInformation.incomeResponsability,
					internetAccess: user.entrepreneur.detailedInformation.internetAccess,
					culinaryTimeYear: user.entrepreneur.detailedInformation.culinaryTimeYear,
					culinaryTimeMonth: user.entrepreneur.detailedInformation.culinaryTimeMonth,
					culinaryCourses: user.entrepreneur.detailedInformation.culinaryCourses,
					culinaryCoursesName: [user.entrepreneur.detailedInformation.culinaryCoursesName],
					peopleSupport: user.entrepreneur.detailedInformation.peopleSupport,
					observation: user.entrepreneur.detailedInformation.observation,
					objective: user.entrepreneur.detailedInformation.objective,
					objectiveCompletion: user.entrepreneur.detailedInformation.objectiveCompletion,
					messageToMDC: user.entrepreneur.detailedInformation.messageToMDC,
					howMeetUs: user.entrepreneur.detailedInformation.howMeetUs
				}
			},
			contact: [
				{
					phone: user.contact.phone,
					facebook: user.contact.facebook,
					businessPhone: user.contact.businessPhone,
					mobilePhone: user.contact.mobilePhone,
					email: email
				}
			],
			address: [
				{
					country: user.address.country,
					state: user.address.state,
					city: user.address.city,
					addressLine1: user.address.addressLine1,
					zip: user.address.zip
				}
			]
		}));

	}else{
		setTimeout('process()',1000);
	}
}

function goRegister (){
	window.location = "registerAccess.html";
}

function testPass(){
	password = document.getElementById("passwordField").value;
	passwordConfirmation = document.getElementById("passwordConfimationField").value;

	var pass1 = password;
	var pass2 = passwordConfirmation;
	var ok = true;

	if(pass1 != pass2){
		document.getElementById("passwordMatch").innerHTML = "<h4>As senhas não coincidem</h4><br>";
		document.getElementById("passwordMatch").style.color = "#ff0000";
		ok = false;
	} else {
		window.location = "/thankyou.html";
	}
	return ok;
}
