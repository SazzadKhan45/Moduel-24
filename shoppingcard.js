const products = [
    {id : 'Shirt', price : 750, quanty : 3},
    {id : 'pant', price : 950, quanty : 5},
    {id : 'Tshirt', price : 250, quanty : 4},
    {id : 'bag', price : 1200, quanty : 1},
    {id : 'watch', price : 200, quanty : 1}
];

// calculate total shopping cost

function calculateShoppingCost (products){
    let totalMoney = 0;
    for(const product of products){
        // const productAmount = product.price * product.quanty;
        totalMoney = totalMoney + product.price * product.quanty;
    }
    return totalMoney;
}

// Call the function

const totalCost = calculateShoppingCost(products);
console.log('Total shopping cost is : ', totalCost, 'Tk');