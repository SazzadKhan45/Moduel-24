const disha = 78; 
const salman = 56;

if(disha < salman){
    console.log('Small number is :', disha);
}
else{
    console.log('Small number is :', salman);
}

// This condition apply a function

function getMin (a, b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}

// Call the function

const minNumber = getMin(disha, salman);
console.log('The small number is :', minNumber);

// Apply Math.Min functin find the small number

const getMinNumber = Math.min(455, 55, 788, 12);
console.log('Find small number apply Math.min function :', getMinNumber);