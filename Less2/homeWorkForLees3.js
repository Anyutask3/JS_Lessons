// //1. Trvac e 'aaa@bbb@ccccc@@d' toxy. Pek e bolor '@' poxarinenk '!'. Gtnel toxi erkarutyuny. Poxel arajin tary 'l' darcnel mecatar.
// let myStr = 'aaa@bbb@ccccc@@d';
// let changeMyStr = myStr.replace(/@/g, '!');
// console.log(changeMyStr);
// console.log(myStr.length);
// let myStr2 = (changeMyStr.replace('a', 'l')); //aaa@bbb@ccccc@@d = laa@bbb@ccccc@@d
// console.log(myStr2);
//  // console.log(myStr2.charAt(0).toUpperCase() + myStr2.slice(1));
//  console.log(myStr2.slice(1));
//  console.log(myStr2);



//
// 2. Trvac e '// 2. Trvac e 'Hello everyone! My NaMe is Milana!' toxy. Ktrel ays toxic 'NaMe' bary 3 tarber exanaknerov. Naev ogtagorcel toLowerCase ev toUpperCase. Naev gtnel 'is'' toxy. Ktrel ays toxic 'NaMe' bary 3 tarber exanaknerov. Naev ogtagorcel toLowerCase ev toUpperCase. Naev gtnel 'is'
// let task2 = 'Hello everyone! My NaMe is  Ani!';
// console.log(task2.substr(19, 4));
// console.log(task2.substring(19, 23));
// // console.log(task2.charAt(19, 23));
// console.log(task2.includes('NaMe'));
// let pos = task2.search('NaMe');
// let pos2 = 'NaMe';
// console.log(pos);
// let newTexts = task2.split(' ');
// console.log(newTexts);
// function search_word() {
// for(let i = 0; i <= task2.length; i++) {
//     if (newTexts[i] == pos2) {
//         console.log('it is not good word');
//     } else {
//         console.log('NaMe');
//     }}
// }
//     search_word();

//
//
// //3. Trvac e '2020-08-28', petk e stanank '28/08/2020'.
// let st = '2020-08-28';
// let  st2= st.replace(/-/g, '/');
// let st3 = st2.split('/');
// // console.log(st3);
// let st4 = st3.reverse().toString();
// console.log(st4.toString('/'));


//1 parametrov functio tiv

function kentKamZug(a){
    if(typeof(a) === 'number' && a !== NaN && a !== Infinity && a >= 0){
     if (a % 2 === 0){
         console.log(a + " Zuyg tiv e");
     } else {
         console.log(a + " Kend tiv e");
     }
    } else {
        return false;
    }
}
kentKamZug(5);

__________________
///homework L4
// Math objects and methods
//write functions whith it. minimium 10 functions