// Multi layer discount function

function layeredDiscount(products){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    // condition discound
    if(products <= 100){
        const totalPrice = products * first100Price;
        return totalPrice;
    }
    else if(products <= 200){
        const frist100 = first100Price * 100;
        const above100 = (products - 100) * second100Price;
        const totalPrice = frist100 + above100;
        return totalPrice;
    }
    else{
        const first100 = first100Price * 100;
        const second100 = second100Price * 100;
        const above200 = above200Price * (products - 200);
        const totalPrice = first100 + second100 + above200;
        return totalPrice;
    }
}

// call the function

const productQuantity = layeredDiscount(201);

console.log('Total product price is :', productQuantity, 'Tk.');