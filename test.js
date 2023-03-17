const add1 = (num1,num2) => num1 + num2;
//본문이 한줄이라 중괄호 생략이 되었고 
//return 값도 암묵적으로 이루어지므로 생략했다.

const add2 = (num1,num2) => {return num1 + num2;}
console.log(add1(1,2));
console.log(add1(3,4));

const squ1 = function (num){
	return num * num;
}

const squ2 = num => num * num;
console.log(squ1(5));
console.log(squ2(7));

const isPos = num => {
    if(num<0) num=0;
    return num; 
}

const isPos2 = num => {num>0 ? num:num=0; return num;}
const isPos3 = num => num<=0 ? 0 : num;
console.log(isPos(-1));
console.log(isPos(1));

console.log(isPos2(-10));
console.log(isPos2(10));

console.log(isPos3(-20));
console.log(isPos3(20));

setTimeout(()=>console.log("Hello"),3000);