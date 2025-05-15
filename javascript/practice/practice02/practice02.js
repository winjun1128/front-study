function getMealByTime(t){
    if(t>=6&&t<=10)return "아침";
    else if(t>=11&&t<=14)return "점심";
    else if(t>=17&&t<=20)return "저녁";
    else if(t>=21&&t<=23)return "야식";
    else return "금식";
}
//익명
const getMealByTime2  = function(t){
    if(t>=6&&t<=10)return "아침";
    else if(t>=11&&t<=14)return "점심";
    else if(t>=17&&t<=20)return "저녁";
    else if(t>=21&&t<=23)return "야식";
    else return "금식";
}
//네이밍 함수
const getMealByTime3 = function funcgetMealByTime3(t){
    if(t>=6&&t<=10)return "아침";
    else if(t>=11&&t<=14)return "점심";
    else if(t>=17&&t<=20)return "저녁";
    else if(t>=21&&t<=23)return "야식";
    else return "금식";
}
//()=>표기
const getMealByTime4  = (t)=>{
    if(t>=6&&t<=10)return "아침";
    else if(t>=11&&t<=14)return "점심";
    else if(t>=17&&t<=20)return "저녁";
    else if(t>=21&&t<=23)return "야식";
    else return "금식";
}
const getMealByTime5  = (t)=>(t>=6&&t<=10?"아침":t>=11&&t<=14?"점심":t>=17&&t<=20?"저녁":t>=21&&t<=23?"야식":"금식");
console.log(getMealByTime(5));
console.log(getMealByTime2(8));
console.log(getMealByTime3(13));
console.log(getMealByTime4(16));
console.log(getMealByTime5(19));
console.log(getMealByTime5(22));
console.log(getMealByTime5(2));