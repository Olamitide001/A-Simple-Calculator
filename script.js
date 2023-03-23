'use strict'
const buttons =document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulation

function calculate(button){
    const value = button.textContent;

    if(value === 'CLEAR'){
        calculation = []
        screenDisplay.textContent = '0'
    }
    else if(value === '='){
        screenDisplay.textContent = eval(accumulation) 

    }else{
    calculation.push(value)
    accumulation = calculation.join('')
    screenDisplay.textContent = accumulation
    }
}

buttons.forEach(button => button.addEventListener('click', function(){
    calculate(button)
}))