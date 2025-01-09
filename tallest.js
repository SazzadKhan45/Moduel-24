const heights = [78, 56, 45, 90, 231, 534, 55, 76];

// Apply function find large number

function getMax (numbers){
    let maxNumber = numbers[0];
    for(const number of numbers){
        if(maxNumber < number){
            maxNumber = number;
        }
    }
    return maxNumber;
}

// Call the function

const maxValue = getMax(heights);
console.log('The lagre value is :', maxValue);

// Find smaller number by a function

function getMin(numbers){
    let minNumber = numbers[0];
    for(const number of numbers){
        if(minNumber > number){
            minNumber = number;
        }
    }
    return minNumber;
}

// Call the function

const minValue = getMin(heights);
console.log('The smaaler value is :', minValue);