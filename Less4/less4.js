//1.check who is older my or Random from 1 to 50
let random = Math.floor(Math.random(1, 40) * 50) + 1;
function myAge(age) {
    if (typeof (age) === 'number' && age !== NaN && age !== Infinity && age >= 0) {
        if (age === random) {
            console.log("You are the same age");
        } else if(age < random){
          console.log("You are smoler then you, You are already " + random)  ;
        } else if (age > random){
            console.log("Yeh!, I am older then you, You are still " + random);
        }
    }
     else {
        console.log("You are write not number, please try agein");
    }
}
myAge(32);

//2. Write a JavaScript function to convert a binary number to a decimal number.

function binarToDecimal(n) {
    if (typeof (n) === 'number' && n !== NaN && n !== Infinity) {
        return parseInt(('' + n).replace(/[^01]/gi, ''), 2);
    }
}
console.log(binarToDecimal(1101));



//3.reduce
let numbers = [];
numbers.push(17, 54, 18, 37);
//let  sum = 0;
// let sum = numbers.reduce(function(a, b){
//     return a + b;
// }, 0);

//-----
// console.log(sum);
//     for(let n of numbers){
//         sum += n;
//     }
//     console.log(sum);
//________

const sum = numbers.reduce(
    (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
//const sum = numbers.reduce(
//  (accumulator, currentValue) => accumulator + currentValue;
// );
//console.log(sum);
    //a = 0, c = 17 => a =17
    //a = 17, c = 54 => a = 71
    //a = 71, c = 18 => a = 89
    //a = 89, c = 37 => a = 126

function myFunction() {
    let num = 4.665;
    let n = num.toFixed(0); //inchqan toxni ,-ic heto u klaracni tiv@
    let roundNumber = n.valueOf();
}
console.log(n);


//4. Write a JavaScript function to find the lowes value in an array.
function minNum(input) {
    if (input.constructor === Array){
    return Math.min.apply(null, input);
} else {
        return false;
    }
}

console.log(minNum([12,17,9,1]));
console.log(minNum([-12,-34,0,-56,-1]));

//5. Write a JavaScript function to find the highest value in an array.
function minNum(input) {
    if (input.constructor === Array){
        return Math.max.apply(null, input);
    } else {
        return false;
    }
}

console.log(minNum([12,17,9,1]));
console.log(minNum([-12,-34,0,-56,-1]));
//the url helps me- https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array?page=2&tab=votes

// //6. Write a JavaScript function to find out if a number is natural or not
function naturalOrNot(n)
{
    if (typeof n !== 'number')
        return 'Not a number';

    return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity && typeof (n) === 'number' && n !== NaN;
}
console.log(naturalOrNot(-15)); //false
console.log(naturalOrNot(15.1)); //false
console.log(naturalOrNot(15)); // true

//.7 Write a JavaScript function to find the highest value in an array but at the first make all negativ number to positive.
function minNum(input) {
    if (input.constructor === Array){
        let arry2 = input.map( v => Math.floor( Math.abs(v) * 100) / 100 );
        return Math.max.apply(null, arry2);
    } else {
        return false;
    }
}
console.log(minNum([-12,-34,0,-56,-1]));
//help url https://stackoverflow.com/questions/48742891/change-all-minus-values-to-positive-values-in-array-using-javascript


//8.find that a given number is a power of two?
function powerOfTwo(x) {
    return (Math.log(x)/Math.log(2)) % 1 === 0;
}
console.log(powerOfTwo(16));  //true

//9.Write a JavaScript function to check whether a value is an integer or not
function myInt(num) {
        if (num === parseInt(num, 10)){
            alert("data is integer");
        } else {
            alert("data is not an integer")
        }
}
console.log(myInt(12));

//10.  c2 = a2 + b2
function qarakusi(x, y) {
    if ((typeof x !== 'number' || x === NaN || x === Infinity) || (typeof y !== 'number' || y === NaN || y === Infinity))
        return false;
    return Math.sqrt(x * x + y * y);
}

console.log(qarakusi(2, 4));


//11. convert a positive number to negative number.
function postToNeg(num)
{
    return -Math.abs(num);
}

console.log(postToNeg(15));
