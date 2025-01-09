const phonePrices = [
    {name: 'Samumg', price : 26000, camara : '16mp', color : 'Golen'},
    {name: 'Sumphany', price : 6000, camara : '16mp', color : 'Golen'},
    {name: 'Xiomay', price : 20000, camara : '16mp', color : 'Golen'},
    {name: 'Infinix', price : 15000, camara : '16mp', color : 'Golen'},
    {name: 'Moto', price : 21000, camara : '16mp', color : 'Golen'},
    {name: 'Oppo', price : 30000, camara : '16mp', color : 'Golen'},
    {name: 'Iphone', price : 60000, camara : '16mp', color : 'Golen'},
    {name: 'Nokia', price : 16000, camara : '16mp', color : 'Golen'}
];

// Find chepest phone by a function

function getChepestPhone (phones){
    let cheapPhone = phones[0];
    for(const phone of phones){
        if(phone.price < cheapPhone.price){
            cheapPhone = phone;
        }
    }
    return cheapPhone;
}

// Call the function

const cheapMobile = getChepestPhone(phonePrices);
console.log('The cheap mobile phone is :', cheapMobile);