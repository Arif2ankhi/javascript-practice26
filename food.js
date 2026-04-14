const age = 62;
const price = 500;

if (age < 12){
    console.log('No need to pay');
}
else if (age >=60){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

}
else {
    console.log(price);
}