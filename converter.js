function returnArrayBaseNumbers (baseType){

    const dec = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const bin = ['0', '1'];
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const oct = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

    switch(baseType){
        case '10':
            return dec;
        case '2':
            return bin;
        case '16':
            return hex;
        case '8':
            return oct;
    }
}

function inputValidation (inputType, input){
    
    const arrayBaseNumbers = returnArrayBaseNumbers(inputType);
    let isValid = false;
}

const convertButton = document.querySelector(".container__button");

convertButton.addEventListener("click", function(){
    const inputType = document.querySelector("#inputType").value;
    const outputType = document.querySelector("#outputType").value;
    const inputValue = document.querySelector(".container__input").value;
    const outputTd = document.querySelector("#container__output");

    console.log(inputValidation(inputType, inputValue));
})