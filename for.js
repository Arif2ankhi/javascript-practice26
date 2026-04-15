// let num = 1;
// while (num <5){
//     console.log(num)
//     num++;
// }

// for (let num = 0; num < 20; num++){
//     if(num % 2 ===1)
//         console.log('odd number');
//     console.log(num);
// }
//  for ( let i = 1; i < 15; i=i+2){
//     console.log(i);
//  }

// let sum = 0; 
// for ( let i = 11; i <= 20; i++){
    
//     sum = sum + i;
//     console.log(i);
// }
// console.log('Sum of number from 11 to 20 is', sum);


// // Decremental for loop

// for ( let i = 10; i >= 0; i--){
//     console.log(i);
// }


// for ( let i = 0; i < 10; i++){
//     if( i % 2 !== 0){
//         console.log(i);
//     }
    
// }


// for ( let i = 0; i < 10; i+=2){
//     if( i % 2 !== 0){
//         console.log(i);
//     }
    
// }

// give me th elist of number from 1 to 3 divisible by 5 


// for ( let i = 1; i <= 100; i++){
//     if ( i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }

let total = 0; 

for ( let i = 1; i <= 20; i++){
    if ( i % 3 === 0 ){
        console.log(i);
        total = total + i; 
    }
}
console.log('Total of the number', total);