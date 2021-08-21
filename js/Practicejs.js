const a = 5;
let b = 2;
console.log(a+b);
console.log(a*b);
b=4;
console.log(a-b);
const name = "min";
const arrayEX = [a, b, name, "hello"];
console.log(arrayEX);
console.log(arrayEX[2]);
//주석
// const Player={
//     //아래 요소들은 Object
//     name: "min",
//     age: 28,
//     hansome: true
// }

// // function 만드는법
// function Ex(a, b){
//     return console.log("Hello my name is "+ a+ " and i'm "+ b )
// }
// Ex("min",28);
//function 안에 return값을 지정하면 다른 변수나 함수에서 function을 사용하면 그 return값을 받는다. 

const Player={
    //아래 요소들은 Object
    name: "min",
    age: 28,
    hansome: true,
    EX: function(argument1,argument2){
        console.log("Hello my name is "+ argument1+ " and i'm "+ argument2 )
    }
}
console.log(Player);
console.log(Player.name);
    //변수의 요소들은 object 이들은 변수가 const라도 object는 후에 바꿀 수 있다.
Player.name="jong";
Player.Lastname="min";
Player.age = Player.age +10;
console.log(Player);
Player.EX("min", 28);
