const display = document.querySelector('.display')
let buttons = document.querySelectorAll('.buttons')
let del = document.querySelector('#backspace')
let operator = '';
let num1 = '';
let num2 = '';

function sumAll(num1, num2){
	return num1 + num2
}

function minusAll(num1, num2){
	return num1 - num2
}

function multiplyAll(num1, num2){
	return num1 * num2
}

function divideAll(num1, num2){
	return num1 / num2
}

function equalTo(){
	let result = document.createElement('h2')
	if (num2 == ''){
		result.textContent = num1
	} else if(num1 == ''){
		num1 = '0'
	} 

	if (operator == '+' && num2 != ''){
		result.textContent = sumAll(parseInt(num1), parseInt(num2))
	} else if (operator == '-' && num2 != ''){
		result.textContent = minusAll(parseInt(num1), parseInt(num2))
	} else if(operator == '*' && num2 != ''){
		result.textContent = multiplyAll(parseInt(num1), parseInt(num2))
	} else if (operator == '/' && num2 != ''){
		if (num1 == '0' && num2 == '0'){
			result.textContent = 'Absolutely not, you maniac'
		} else {
			result.textContent = divideAll(parseInt(num1), parseInt(num2))
		}
	}
	
	while(display.hasChildNodes()){
		display.removeChild(display.firstChild)
	}
	display.appendChild(result)
	operator = ''
	num1 = ''
	num2 = display.textContent
}

function createOperation(e){
	if (operator == ''){
		operator = e.target.textContent
		let operation = document.createElement('h2')
		operation.textContent = e.target.textContent
		num1 = num2
		num2 = ''
		display.appendChild(operation)
	} else {
		equalTo()
		operator = e.target.textContent
		let operation = document.createElement('h2')
		operation.textContent = e.target.textContent
		num1 = num2
		num2 = ''
		display.appendChild(operation)
	}
}

buttons.forEach( div => {
	div.addEventListener('click', (e) => {
		let text = document.createElement('h2')
		text.textContent = e.target.textContent
		num2 += text.textContent
		display.appendChild(text)
	})

})

del.addEventListener('click', () => {
	let child = display.childNodes
	while(display.hasChildNodes()){
		display.removeChild(display.firstChild)
	}
	operator = ''
	num1 = ''
	num2 = ''
})

let equal = document.querySelector('#equal').addEventListener('click', equalTo)

let sum = document.querySelector('#sum').addEventListener('click', createOperation)
let minus = document.querySelector('#minus').addEventListener('click', createOperation)
let multiply = document.querySelector('#mult').addEventListener('click', createOperation)
let divide = document.querySelector('#div').addEventListener('click', createOperation)

window.addEventListener('keydown', (e) => {
	const key = document.querySelector(`div[id='${e.key}']`)
	key.classList.toggle('pressed')
	let text = document.createElement('h2')
	text.textContent = key.textContent
	num2 += text.textContent
	display.appendChild(text)
	
})

window.addEventListener('keyup', (e) => {
	const key = document.querySelector(`div[id='${e.key}']`)
	key.classList.toggle('pressed')
})
