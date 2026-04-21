function oddAverage(numbers){
    const odds = [];

    for (number of numbers){
        if( number % 2 ===1){
            // console.log(number);
            odds.push(number);

        }
        
    }
    // console.log(odds);
    let sum = 0;

    for (const number of odds){
        sum = sum + number; 
    }
    const count = odds.length
    console.log(sum, count);
    const avg = sum / count;
    return avg;


   
}

 const numbers = [42, 33, 56, 81, 53,77, 85, 64];
    const avg = oddAverage(numbers);
    console.log('average of the odd numbers is', avg);