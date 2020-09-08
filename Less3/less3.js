// var str = ('Apple', 'Banana', 'Kiwi', 'Orange', 'Strawberry');  //Slicde
// var res = str.slice(7);
// console.log(res);
//
// var pos = str.lastIndexOf('Kiwi');   //IndexOf

// let myStr= 'maz';
// // let firatElementOfMyString = myStr.replace('m', 't' );
// // console.log(firatElementOfMyString);
// ////firatElementOfMyString = 't';
// ////var newText= (firatElementOfMyString + myStr);
//
// let firatElementOfMyString = myStr.split('');  // Split change the string to Array
// firatElementOfMyString[0] ='t';
// console.log(firatElementOfMyString.join(''));  //join change array to string

let sentence ='Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
    ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
    ' ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate' +
    '  velit esse cillum dolore eu fugiat nulla pariatur.'

// let pos = sentence.search('sex');
// let newTexts = sentence.split(' ');
// function search_word() {
//     if (newTexts[i]== pos){
//             console.log('it is not good word');
//         } else {
//             console.log('You are good');
//         }
// search_word();

// let sentence1 = sentence.indexOf('sex');  //IndexOf
// if(sentence1 === -1) {
//     console.log('Yes it is good');
// } else {
//     console.log('No it is not good');
// }


//Function - otagorcum em reusble linelu hamatr,
            // 20 toxic avel clini u
            //  1 gorcoxutyn ani,
            // return statment chi tpum uxaki katarum e,


function myFunc(a, b){
    // console.log(a * b);
   let newSum =  sum(a, b);
    return a * b + newSum;
}

let newFunc = myFunc(5, 6);
console.log(newFunc);

function sum(a, b){
    return a + b;
}

//homework function 10 hat grel
// homework strin methodes normal nayel


let myStr= 'maz';
let firatElementOfMyString = myStr.replace('m', 't' );
console.log(firatElementOfMyString);

let myStrs= 'maz';
let firatElementOf = myStrs.split('');
let firatElementOf[0];