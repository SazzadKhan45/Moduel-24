const disha = 96;
const salman = 89;

if(disha > salman){
    console.log('Disha get the highest number');
}

else{
    console.log('Salman get the highest number');
}

// Same condition apply function

function getMax(number1, number2){
    if(number1 > number2){
        return  number1;
    }
    else{
        return number2;
    }
}

const callTheFunction = getMax(disha, salman);
console.log('Large number is :',callTheFunction);

// Three number check larger number

const a = 145;
const b = 56;
const c = 98;

function getMaxNumber (x, y , z){
    if( x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    else{
        return z;
    }
}

// Call the function

const findMaxNumber = getMaxNumber(a, b, c);
console.log('The large number is :',findMaxNumber);

// Unlimited number check large number

const max = Math.max(12, 34, 66, 87, 97);
console.log('Find large number apply Math.max function :', max);