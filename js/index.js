function submitForm(event) {
	event.preventDefault();
	let name = document.getElementById('exampleFormControlTextarea1').value;
	sessionStorage.setItem('name', name);
	location.href = '/quiz.html';
	console.log(name);
}
