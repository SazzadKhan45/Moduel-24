// create a calcular function

function calcular(a, operator, b ){
    if(operator === '+'){
        const add = a + b;
        return add;
    }
    else if(operator === '-'){
        const subtract = a - b;
        return subtract;
    }
    else if(operator === '*'){
        const multification = a * b;
        return multification;
    }
    else if(operator === '/'){
        const divide = a / b;
        return divide;
    }
    else{
        return 'Your input information is not correct. Please check your input';
    }
}

// call the function
const input = calcular(4, '/', 3);
console.log('Calculate number is :',input);