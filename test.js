//const numArray = [1,2,3,4];
//배열의 길이 구하기
//console.log(numArray.length);

//배열의 값 지정하기
//const arr = [];
//arr[2] = 3;

//배열의 길이와 배열의 요소 갯수는 같은가? -> NO
//console.log(arr.length); // 3
//console.log(arr); //[ <2 empty items>, 3 ]

//배열을 직접적으로 건드리는 방식
//numArray.push(5,6);
//console.log(numArray);

//배열을 직접 건드리지 않는 방식
//const result = numArray.concat(7,8);
//console.log(numArray);
//console.log(result);

//배열을 직접적으로 건드리며 제거하는 메소드
//numArray.pop();
//console.log(numArray);

//배열 순회하기
//기존의 방법
//const nameArr = ['민철','영수','영희','민수'];
//
//for(var i=0; i<nameArr.length;i++){
//    console.log(`내 이름은 ${nameArr[i]}야`);
//}

//forEach
//nameArr.forEach(function(name){
//    console.log(`내 이름은 ${name}야`);
//})

//nameArr.forEach(name=>console.log(`내 이름은 ${name}야`));

//numArray.forEach(function(num){
//    console.log(num);
//})

//numArray.forEach(function(){
//    console.log(numArray);
//})

//const oddArr = [1,3,5,7,9];

//oddArr.map(num=>{console.log(num*2)});
//const newArr = oddArr.map(num=>num*2);
//console.log(newArr);

//const oddArr = [1,3,5,7,9];
//const newArr2 = oddArr.filter(name => name>5);
//console.log(newArr2);

const postlist =[{"date":"yesterday","id":1},{"date":"yesterday","id":2},{"date":"today","id":3}]
const yesterdaypost = postlist.filter(post=>post.date ==="yesterday");
console.log(yesterdaypost);

const idUp = postlist.filter(post=>post.id >=2);
console.log(idUp);