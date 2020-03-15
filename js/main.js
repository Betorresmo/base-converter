import inputValidation from './validation.js';

const convertButton = document.querySelector(".container__button");

convertButton.addEventListener("click", function(){
    const inputType = document.querySelector("#inputType").value;
    const outputType = document.querySelector("#outputType").value;
    const inputValue = document.querySelector(".container__input").value;
    const outputTd = document.querySelector("#container__output");

    console.log(inputValidation(inputType, inputValue));
})