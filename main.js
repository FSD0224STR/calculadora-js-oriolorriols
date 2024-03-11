
const input = document.getElementById("screen")
const inputMemory = document.getElementById("screenSecondary")

const minusCssColor = document.querySelector("#operatorminus")
const addCssColor = document.querySelector("#operatoradd")
const multiplyCssColor = document.querySelector("#operatormultiply")
const divideCssColor = document.querySelector("#operatordivide")



// numero que se ve en pantalla
let numberOperation = ''

// numeros para hacer las operaciones
let operatorNum1 = ''
let operatorNum2 = ''

// operador
let operation = ''

// resultado
let result = ''

// elemento del operador para agregar CSS
let cssBackgroundItem = ''


function changeColor(cssBackgroundItem) {
    cssBackgroundItem.classList.add("active");
}


function onClickNumber(number) {
    let newNumberOperation = numberOperation.concat('', number)
    numberOperation = newNumberOperation
    input.value = numberOperation
}


function onClickOperator(operator) {
    operatorNum1 = numberOperation
    numberOperation = ''
    operation = operator
    inputMemory.value = operatorNum1 + " " + operation

    switch (operator) {
        case "+":
            cssBackgroundItem = addCssColor
            minusCssColor.classList.remove("active");
            multiplyCssColor.classList.remove("active");
            divideCssColor.classList.remove("active");
            break
        case "-":
            cssBackgroundItem = minusCssColor
            addCssColor.classList.remove("active");
            multiplyCssColor.classList.remove("active");
            divideCssColor.classList.remove("active");
            break
        case "*":
            cssBackgroundItem = multiplyCssColor
            minusCssColor.classList.remove("active");
            addCssColor.classList.remove("active");
            divideCssColor.classList.remove("active");
            break
        case "/":
            cssBackgroundItem = divideCssColor
            minusCssColor.classList.remove("active");
            addCssColor.classList.remove("active");
            multiplyCssColor.classList.remove("active");
            break
    }

    changeColor(cssBackgroundItem)
}


function globalReset() {
    operatorNum1 = ''
    operatorNum2 = ''
    operation = ''
    numberOperation = ''
    input.value = '0'
    inputMemory.value = ''
    clearAllCssButton()
}


function eraseLastNumber() {
    let numberLength = numberOperation.length
    let eraseNumber = numberOperation.slice(0, numberLength - 1)
    if (numberLength > 1) {
        numberOperation = eraseNumber
        input.value = eraseNumber
    } else {
        input.value = '0'
    }
}


function onClickResult() {
    switch (operation) {
        case "+":
            operatorNum2 = numberOperation
            result = Number(operatorNum1) + Number(operatorNum2)
            printAndReset()
            break
        case "-":
            operatorNum2 = numberOperation
            result = Number(operatorNum1) - Number(operatorNum2)
            printAndReset()
            break
        case "*":
            operatorNum2 = numberOperation
            result = Number(operatorNum1) * Number(operatorNum2)
            printAndReset()
            break
        case "/":
            operatorNum2 = numberOperation
            result = Number(operatorNum1) / Number(operatorNum2)
            printAndReset()
            break
    }
    
}


function clearAllCssButton(){
    minusCssColor.classList.remove("active");
    addCssColor.classList.remove("active");
    multiplyCssColor.classList.remove("active");
    divideCssColor.classList.remove("active");
}

function printAndReset() {
    inputMemory.value = operatorNum1 + " " + operation + " " + operatorNum2 + " ="
    input.value = result
    numberOperation = result
    operatorNum1 = ''
    operatorNum2 = ''
    operation = ''
    clearAllCssButton()
}