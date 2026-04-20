function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0) {
        console.log('even size');
    }
    else{
        console.log('odd size');
    }
}

evenSizedString('Dhaka')
evenSizedString('London')



function numberOfElements(numbers){
    const len = numbers.length;
    return len; 
}
numberOfElements([12, 45, 78, 45, 121254, 44, 56])



function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum= sum + number;
        
    }
    return sum;
    


}
const nums = [54, 62, 12, 6];

const sum = sumOfNumbers(nums);
console.log('Sum of Numbers is', sum);