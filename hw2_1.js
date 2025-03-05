const cart1 = [
    {name: "Apple", price: 1, quantity: 10},
    {name: "Banana", price: 3, quantity: 5},
    {name: "Milk", price: 10, quantity: 2}
   ];

const cart2 = [  
    {name: "Sushi", price: 20, quantity: 4},  
    {name: "Burger Max", price: 30, quantity: 1}
    ];

function countReceipt(cart){
    receipt=0;
    for (let i=0; i<cart.length; i++){
        receipt=receipt+cart[i].price*cart[i].quantity;
        
    };
    if (receipt>=100){
        receipt=receipt-receipt*0.1;
    }
    return receipt;

};

console.log(countReceipt(cart1));
console.log(countReceipt(cart2));
