//내장객체

let str = "hellohi@gmail.com";
console.log(str.length);    //문자의 길이

console.log(str.includes("g")); //해당 문자가 포함인가?

console.log(str.indexOf("@"));  //해당 문자의 인덱스찾기
console.log(str.indexOf("!"));  //문자가 없으면 -1 return

//if(str.indexOf("!")==-1)

console.log(str.substring(0,4));  //문자 잘라내기
            //      0<=   <4
console.log(str.substring(5,11));

//처음 ~ @ : 아이디
// @ 다음 ~ 끝 : 도메인
console.log(str.indexOf("@"));
let id = str.substring(0, str.indexOf("@"));
console.log(id);
let domain = str.substring(str.indexOf("@")+1,str.length); //7+1, 17    (8,17)
//let domain = str.substring(str.indexOf("@")+1);
console.log(domain);

//" abc" "abc "
// "abc"  //" firstname lastname "

//앞뒤 공백 제거 trim
let test = " abc ";
console.log(test);
console.log(test.trim());   //공백제거
test = test.trim();
console.log(test);

//문자 분리 split
// studt.java.practice.main
let number = "010-1234-5678";
let s = number.split("-");
console.log(s);