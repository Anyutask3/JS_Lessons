function checkValue(){
    // let elem = document.getElementById('checkVelue')
    // console.log("Hello!");
    let inputValue = document.getElementById('writeNumber');
    let newWriteNumber = inputValue.value * 1;
    let myValue = Math.floor(Math.random() * 10) + 1;
    // console.log(typeof(newWriteNumber));
    if (typeof (newWriteNumber) === 'number' && newWriteNumber !== NaN && newWriteNumber !== Infinity && newWriteNumber > 0) {
        if (newWriteNumber === myValue) {
            console.log('We are icuale');
        } else if(newWriteNumber < myValue){
            console.log('You losse ' + myValue)  ;
        } else if (newWriteNumber > myValue){
            console.log('Yeh!, I am winn ' + myValue);
        }
    }
    else {
        console.log('You are write not number, please try agein');
    }
    document.getElementById('writeNumber').value = '';
}

function negativOrPositive(){

    const input = document.getElementById('negativeOrPos');
    // console.log(input);
    const inputValue = input.value * 1;
    const newNumber = Math.abs(inputValue);
    // console.log(inputValue);
    if (inputValue === newNumber) {
        console.log('You write positive number and your number is ' + inputValue);
    } else {
        console.log('You write negative number and your number is ' + inputValue);
    }
}
//homework documentic elementner vercner
//html 3 buttun, guynerov red yellow and green
//1 function consol log buttoni guyn@
