let display = document.querySelector('.display')
let buttons = document.querySelectorAll('.buttons')
let del = document.querySelector('#backspace')
let index = 0;
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
	if (num1 == '' && operator == ''){
		result.textContent = num2
	} else if (num2 == ''){
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
	} else if (operator == '' && num2 == ''){
		result.textContent == parseInt(num1)
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

function pressedEvent(e){
	if (operator == ''){
		operator = e.target.firstElementChild.lastElementChild.lastElementChild.children[index].textContent
		let operation = document.createElement('h2')
		operation.textContent = e.target.firstElementChild.lastElementChild.lastElementChild.children[index].textContent
		num1 = num2
		num2 = ''
		display.appendChild(operation)
	} else {
		equalTo()
		operator = e.target.firstElementChild.lastElementChild.lastElementChild.children[index].textContent
		let operation = document.createElement('h2')
		operation.textContent = e.target.firstElementChild.lastElementChild.lastElementChild.children[index].textContent
		num1 = num2
		num2 = ''
		display.appendChild(operation)
	}
}

window.addEventListener('keydown', (e) => {
	if (e.key == '+'){
		index = 1
		const key = document.querySelector(`div[id='sum']`)
		if(!key) return
		key.classList.add('pressed')
		pressedEvent(e)
	} else if (e.key == '-') {
		index = 2
		const key = document.querySelector(`div[id='minus']`)
		if(!key) return
		key.classList.add('pressed')
		pressedEvent(e)
	} else if (e.key == '*') {
		index = 3
		const key = document.querySelector(`div[id='mult']`)
		if(!key) return
		key.classList.add('pressed')
		pressedEvent(e)
	} else if (e.key == '/') {
		index = 4
		const key = document.querySelector(`div[id='div']`)
		if(!key) return
		key.classList.add('pressed')
		pressedEvent(e)
	} else if (e.key == 'Backspace') {
		const key = document.querySelector(`div[id='backspace']`)
		if(!key) return
		key.classList.add('pressed')
		let child = display.childNodes
		while(display.hasChildNodes()){
			display.removeChild(display.firstChild)
		}
		operator = ''
		num1 = ''
		num2 = ''
	} else if (e.key == 'Enter') {
		const key = document.querySelector(`div[id='equal']`)
		if(!key) return
		key.classList.add('pressed')
		equalTo()
	} else {
		const key = document.querySelector(`div[id='${e.key}']`)
		if(!key) return
		key.classList.add('pressed')
		let text = document.createElement('h2')
		text.textContent = key.textContent
		num2 += text.textContent
		display.appendChild(text)
	}	
	
	
})

window.addEventListener('keyup', (e) => {
	if (e.key == '+'){
		const key = document.querySelector(`div[id='sum']`)
		key.classList.remove('pressed')
	} else if (e.key == '-'){
		const key = document.querySelector(`div[id='minus']`)
		key.classList.remove('pressed')
	} else if (e.key == '*'){
		const key = document.querySelector(`div[id='mult']`)
		key.classList.remove('pressed')
	} else if (e.key == '/'){
		const key = document.querySelector(`div[id='div']`)
		key.classList.remove('pressed')
	} else if (e.key == 'Backspace'){
		const key = document.querySelector(`div[id='backspace']`)
		key.classList.remove('pressed')
	} else if (e.key == 'Enter'){
		const key = document.querySelector(`div[id='equal']`)
		key.classList.remove('pressed')
	} else {
		const key = document.querySelector(`div[id='${e.key}']`)
		if(!key) return
		key.classList.remove('pressed')
	}
	
})

