let preNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//DIBAWAH INI ADALAH PROSES JUMLAH INPUTAN YANG DAPAT DI INPUT
const calculatorScreen = document.querySelector('.calculator-screen')

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}
// DIBAWAH INI ADALAH PROSES PEMANGGILAN ANGKA
const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

//DI BAWAH INI ADALAH PROSES PEMANGGILAN OPERATOR
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

//DIBAWAH INI ADALAH PROSES MENAMPILKAN HASIL 
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

// DI BAWAH INI ADALAH PROSES PERHITUNGAN
const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case '+':
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break

		case '-':
		result = prevNumber - currentNumber
		break

		case '*':
		result = prevNumber * currentNumber
		break

		case '/':
		result = prevNumber / currentNumber
		break

		case '%':
		result = prevNumber % currentNumber
		break

		default:
		return
	}
	currentNumber = result
	calculationOperator = ''
}

//DIBAWAH INI ADALAH PROSES UNTUK MENGHAPUS ANGKA 
const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

//DIBAWAH INI ADALAH PROSES PERHITUNGAN DECIMAL
const decimal = document.querySelector('.decimal')

inputDecimal = (point) => {
	if (currentNumber.includes('.')) {
		return
	}
	if (calculatorScreen.value == '0') {
		currentNumber = calculatorScreen.value
	}
	currentNumber += point
}

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

const btn_percent = document.querySelector('.percentage')

btn_percent.addEventListener('click', (event)=>{
    currentNumber = currentNumber / 100
    updateScreen(currentNumber)
})