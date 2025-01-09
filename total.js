const products = [
    {id : 'Shirt', price : 750},
    {id : 'pant', price : 950},
    {id : 'Tshirt', price : 250},
    {id : 'bag', price : 1200},
    {id : 'watch', price : 200}
];

// calculate total price by a function

function totalShoppingCost (products){
    let totalCost = 0;
    for (const product of products){
        totalCost = totalCost + product.price;
    }
    return totalCost;
}

// call the function

const totalShoppingMoney = totalShoppingCost(products);
console.log('Total shopping cost is :', totalShoppingMoney,'Tk')