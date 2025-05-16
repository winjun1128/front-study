let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */
function changeLink(str){
    if(str.substring(0,str.indexOf(":"))=="https"){
        str=str.replace('human','secure.human');
        return str;
    }
    else if(str.substring(0,str.indexOf(":"))=="http"){
        str=str.replace('http','https');
        str=str.replace('human','open.human');
        return str;
    }
    else{
        str="경로가 잘못되었습니다.";
        return str;
    }
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));