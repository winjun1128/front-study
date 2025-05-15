//함수 리턴
function sum1(){
    return 100;
}
sum1();
console.log(sum1());
let n = 20 + sum1();
console.log(n);

const sum2 = function(a,b){
    return a+b;
}
console.log(sum2(10,20));

const sum3 = function sum333(a,b){
    return a+b;
}
console.log(sum3(90,20));

const sum4 = (a,b)=>{
    return a+b;
}
console.log(sum4(101,202));

const sum5 = (a,b)=> a+b;
console.log(sum5(15,25));

const sum6 = ()=>1+2+3+4+5;

//const sum6 = ()=>{
//    return 1+2+3+4+5;
//}
console.log(sum6());

function func(){
    let x = 10;
    console.log(x);
}

//console.log(x);
if(true){
    let x= 20;
}

{
    let x= 30;
}

//console.log(x);


// console.log(q);
// let q = 30;      //let const

console.log(w);
var w = 30;

r = 3000;
var r;
console.log(r);