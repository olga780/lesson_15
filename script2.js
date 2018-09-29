var main = document.getElementById("main");
var form = document.getElementsByTagName("form");
var myAge = document.getElementsByClassName("age");
var big = document.getElementById("age_yes");
var myAdvertising = document.getElementsByClassName("advertising");
var goodMan = document.getElementById("advertising_yes");
var btn3 = document.getElementById("button_form");


console.log(big);
console.log(goodMan);
console.log(btn3);

function getAccess(){
	var form = document.getElementById('form');
	var container = document.getElementById('text__form');
	var btn3 = document.getElementById("button_form");
	var myAge = document.getElementsByClassName("age");
	var myAdvertising = document.getElementsByClassName("advertising");
	if (myAge[1].checked) {
		alert('Доступ запрещен!')
	}
		else if (myAdvertising[0].checked) {
			alert = ('Доступ разрешен!');
	}
}

btn3.addEventListener("click", getAccess);