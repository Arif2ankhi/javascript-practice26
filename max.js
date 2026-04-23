const disha = 256;
const salman = 76;
const jim = 168;

if( disha > salman & disha > jim){
    console.log('Disha is big');
}
else if (salman > disha && salman > jim){
    console.log('salman is the big');
}
    else{
        console.log('jim is the big  ');
    }

    function getMax(num1, num2){
        if(num1 > num2){
            return num1;
        }
        else {
            return num2;
        }
    }

    const max = getMax( 34, 56)
    console.log(max);