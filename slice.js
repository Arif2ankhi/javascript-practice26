const addrress = 'munshiganj';
const part = addrress.slice(2,5);
console.log(part);


const sentence = 'I am a good and hardworking person';
console.log(sentence.split('a'));


const friendsStr = 'Rahim, Kahim, dahim, lahim, fahim, sahim';
const friends = friendsStr.split(',');
console.log(friends);
const realFriend = [ 'Rahim', ' Kahim', ' dahim', ' lahim', ' fahim', ' sahim' ];
console.log(realFriend.join(' -'));

const first ='Abid';
const  second = 'Hasan';
const fullName = first + ' ' +  second;
console.log(fullName);

const fullName2 = first.concat(' ').concat(second);
console.log(fullName2);

// includes
console.log(second.includes('a'));




const biraniKhor = [ 'Rahim', ' Kahim', ' dahim', ' lahim', ' fahim', ' sahim' ];
