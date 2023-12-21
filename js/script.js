// Copy Text Between Inputs
function moveText() {
	let formMove = document.forms[0];
	let inputFirst = formMove.elements['getData'];
	let inputSecond = formMove.elements['putData'];

	inputSecond.value = inputFirst.value !== '' ? inputFirst.value : inputSecond.value;
}

// Set Placeholder from Input Value
function setPlaceholder() {
	let inputElement = document.forms.formPlaceholder.setData;
	let inputValue = inputElement.value;

	inputValue !== '' ? (inputElement.setAttribute('placeholder', inputValue), inputElement.value = '') : null;
}