//Javascript

var button = document.querySelector('header > nav button');
var menu = document.querySelector('header > nav ul');

button.addEventListener('click', buttonClick)

function buttonClick() {
	menu.classList.toggle('open-menu')
}



