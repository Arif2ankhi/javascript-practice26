// const computer = {
//     brand: 'lenovo',
//     price: 35000,
//     processor: 'intel',
//     hdd: '512gb',
//     monitor: 'hp'
// }

// const keys = Object.keys(computer)
// console.log(keys);

const computer1 = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp',
    unique:{
        color: 'blue',
        shop:'dhaka',
        location:'Banani'
    }
}


for ( const prop in computer1){
    console.log(prop);
}
// delete computer1.processor;
// console.log(computer1);