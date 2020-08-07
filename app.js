class Calculator{
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
  }

  clear(){
    this.currentOperand.innerText = ''
    this.previousOperand.innerText = ''
    this.operation = undefined
  }

  delete(){

  }

  appendNumber(number){
    this.currentOperand = number
  }

  chooseOperation(operation){

  }

  compute(){

  }

  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}

const numberButtons = documents.querySelectorAll('[data-number]')
const operationButtons = documents.querySelectorAll('[data-operation]')
const equalsButton = documents.querySelector('[data-equals]')
const deleteButton = documents.querySelector('[data-delete]')
const allClearButton = documents.querySelector('[data-all-clear]')
const previousOperandTextElement = documents.querySelector('[data-previous-operand]')
const currentOperandTextElement = documents.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
