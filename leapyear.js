function isLeapYear (year){
    if ( year % 4 === 0){
        return true
    } 
    else{
        return false 
    }

}

const isLipi = isLeapYear(2044);
console.log(isLipi);

