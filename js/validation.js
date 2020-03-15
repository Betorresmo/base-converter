export default inputValidation;

function returnBaseRegExp (base){

    switch(base){
        case '10':
            return new RegExp("[0-9]");
        case '2':
            return new RegExp("[01]");
        case '16':
            return new RegExp("[0-9A-F]");
        case '8':
            return new RegExp("[0-8]");
    }
}

function inputValidation (inputType, input){
    
    let isValid = true;

    [...input].forEach((number)=>{
        if(!returnBaseRegExp(inputType).test(number)){
            return isValid = false;
        }
    })

    return isValid;
}