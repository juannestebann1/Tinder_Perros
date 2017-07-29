PhotoDog = document.querySelector("#PhotoDog")
raza = document.querySelector("#raza")
dt = ""

TinDog = (function(){

var data = function(){
	var URL = 'https://dog.ceo/api/breeds/image/random';
	fetch(URL).then(function(respuesta) {  
	  return respuesta.json();
	}).then(content)
	.catch(function() {
	  return "Fallo!!"
	});
}

var content = function(datos) {
	PhotoDog.src = datos.message
	NameRace = datos.message.split('/')
	race = NameRace[5].replace('-', ' ')
	raza.innerHTML = race
	dt = {url : datos.message, race : race}
}

var init = function(){
	document.addEventListener("DOMContentLoaded", function(){
		data()
	})
}

return {
	data : data,
	init : init
}


});

TinDog().init()

like = [];
dlike = [];

document.querySelector("#like").addEventListener("click", function(){
		document.querySelector(".dog").classList.add("translike")
		setTimeout(function(){ document.querySelector(".dog").classList.remove("translike")}, 2500);
		TinDog().data()
		//console.log(dt)
		l = [];
		l["race"] = dt.race;
		l["img"] = dt.url;
		like.push(l)
		myJSON = JSON.stringify(like)
		localStorage["like"] = myJSON;
		console.log(localStorage.getItem("like"))
	})

document.querySelector("#dlike").addEventListener("click", function(){
		document.querySelector(".dog").classList.add("transdislike")
		setTimeout(function(){ document.querySelector(".dog").classList.remove("transdislike")}, 2500);
		TinDog().data()
		console.log(dt)
		//localStorage.setItem("lastname", "Smith");
	})