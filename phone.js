

const prices = [ 20000, 30000, 50000, 100000, 35000, 35000, 15000];


function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if (num < min){
            min = num
        }
    }
    return min
}

const cheapNum = getMin(prices);
console.log('cheapest one is: ', cheapNum);


const phones = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'blue', quantity: 5},
    { name: 'iPhone', price: 2050000, camera: '32mp', color: 'black', quantity: 4},
    { name: 'oppo', price: 120000, camera: '19mp', color: 'red', quantity: 3},
    { name: 'nokia', price: 320000, camera: '15mp', color: 'green', quantity: 7},
    { name: 'xoami', price: 330000, camera: '13mp', color: 'pink', quantity: 6},
    { name: 'nokia', price: 370000, camera: '25mp', color: 'white', quantity: 1},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for ( const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest Phone is:',cheap);


// expensive phone


function getExpensivePhone(phones){
    let max = phones[0];
    for ( const phone of phones){
        if(phone.price > max.price){
            max = phone
        }
    }
    return max
}
const expensive = getExpensivePhone(phones);
console.log('Expensice Phone is:',expensive);

// Total Price 

function getShoppingTotal(phones){
    let total = 0;
    for(const phone of phones){
        total = total + phone.price
    }
    return total;
}

const total = getShoppingTotal(phones);
console.log('Total spend for all Phones is :', total);

// Quantity ber kora 


function phoneTotal(phones){
    let total = 0;
    for(const phone of phones){
        const thisPhoneCost = phone.price * phone.quantity
        total = total + thisPhoneCost;
    }
    return total
}

const shoppingCost = phoneTotal(phones);
console.log('Total shopping cost is:', shoppingCost);


