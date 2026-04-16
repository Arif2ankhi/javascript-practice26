const school = 'Rajuk Uttara Model School';
console.log(school.toUpperCase());

const subject ='chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase() ){
    console.log('Reading book to pass the exam');
    
}
else {
    console.log('Pass na korle feil korbo');
}

const drink = 'water';
const liquid = 'water ';


if (drink.trim() === liquid.trim()){
    console.log('Panir opor nam Jibon');
}
else{
    console.log('sea water is salty unable to drink');
}