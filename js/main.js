import inputValidation from './validation.js';
import {convertToDecimal, convertFromDecimal} from './conversion.js';

const convertButton = document.querySelector(".container__button");

function newOutputTr (value){

    if(!document.querySelector(".container__output")){
        
        const outputTd = document.createElement("td");
        const outputTr = document.createElement("tr");
        const tbody = document.querySelector(".container__tbody");

        outputTd.classList.add("container__output");
        outputTd.setAttribute("colspan","2");
        outputTd.textContent = value;

        outputTr.appendChild(outputTd);
        tbody.children[0].insertAdjacentElement("afterend", outputTr);

    }else{

        document.querySelector(".container__output").textContent = value;
    }    
}
convertButton.addEventListener("click", ()=>{
    const inputType = document.querySelector("#inputType").value;
    const outputType = document.querySelector("#outputType").value;
    let inputValue = document.querySelector(".container__input").value;

    if(!inputValidation(inputType, inputValue)){
        alert("Invalid!");
    }else{
        
        const outputValue = convertFromDecimal(convertToDecimal(inputValue, inputType), outputType);
        newOutputTr(outputValue);
        document.querySelector(".container__input").value = "";
    }
})