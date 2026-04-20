function tenTimes(number){
    const result = number * 10;
    return result;
    
}

function cutHalf(number){
    const half = number / 2;
    return half;
}

const output = tenTimes(5);
console.log( output);

const bigNumbers = tenTimes(99);
console.log(bigNumbers);


function add(price1, price2){
    const total = price1 + price2;
    return total;
}



const bill = add(5, 80);
console.log(bill);

function add2(price1, price2){
return price1 + price2;
}

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);

function isEven(number){
   if (number % 2 === 0){
    return true;

   }
   else {
    return false;
   }
   
}

console.log(isEven(5));
console.log(isEven(110));

function isOdd(number){
   if (number % 2 === 1){
    return true;

   }
   else {
    return false;
   }
   
}

console.log(isOdd(510));
console.log(isOdd(77));