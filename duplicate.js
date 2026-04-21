const biraniKhor = [ 'Rahim', ' sahim', ' Kahim', ' dahim', ' lahim', 'Rahim', ' fahim', ' sahim' ];

const numbers = [1, 4, 6, 9, 12, 34, 56, 78, 94, 73, 9, 6];

function noDuplicateArray(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)=== false){
            unique.push(item)
        }
    }
    return unique

}

const uniqueArray = noDuplicateArray(numbers);
console.log(uniqueArray);