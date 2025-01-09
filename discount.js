// buy 100 pices price 100tk
// buy 200 pices price 90tk
// buy 200+ pices price 75tk


function discountPrice (quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 75;
        return total;
    }
}


// call the function

const productQuantity1 = discountPrice(20);
const productQuantity2 = discountPrice(120);
const productQuantity3 = discountPrice(200);
const productQuantity4 = discountPrice(250);

console.log('price-1 : ', productQuantity1, 'Tk', 'price-2 : ', productQuantity2, 'Tk', 'price-3 : ', productQuantity3, 'Tk', 'price-4 : ', productQuantity4, 'Tk');

