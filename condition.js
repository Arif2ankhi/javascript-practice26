// if  (3 < 10){
//     console.log('I will have a value');
// }

// var birianiPrice = 300;

// if(birianiPrice < 300 ){
//     console.log('give me biriani');
// }
// else{
//     console.log('Give me a Pepsi');
// }

// const salary = 25001;
// const isBCS = true; 
// const height = 61;
// const hasCar = true;

// if (salary > 35000 ||  height > 65 || isBCS == true){
//     console.log('Kobul Kobul Kobul');
// }
// else {
//     console.log('Onno lok  Khujo');
// }


const price = 10000; 

if (price >= 5000){
    const discount  = price * 10 /100;
    const payAmount = price - discount
    console.log(payAmount);
}
else if( price > 2500){
    const discount = price * 5 /100
    const payAmount = price - discount
    console.log(payAmount);

}
else {
    console.log(price);
}