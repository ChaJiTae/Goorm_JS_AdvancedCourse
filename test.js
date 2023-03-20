const oddNumbers = [1,3,5,7,9];
const evenNumbers = [2,4,6,8,10];

const allNumbers = [...oddNumbers,...evenNumbers];
//console.log(allNumbers);

// 1,3,5,7,9 2,4,6,8,10

//allNubmers안에 있는 숫자들을 모조리 더해주는 함수 sum : sum 함수는 인자로 allNumbers의 요소를 받는다.
//function sum(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
//    return num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
//}

//원래 작성하려면...
//const result = sum(
//    allNumbers[0],
//    allNumbers[1],
//    allNumbers[2],
//    allNumbers[3],
//    allNumbers[4],
//    allNumbers[5],
//    allNumbers[6],
//    allNumbers[7],
//    allNumbers[8],
//    allNumbers[9],
//)

//function sum(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
//    return num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
//}

//const result = sum(...allNumbers);
//console.log(result);

//console.log(...allNumbers);
//console.log(allNumbers);

//function sum(...rest){
//    console.log(rest);
//    //return num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
//}

//function sum(...restName){
//    console.log(restName);
//}

//function sum(...restHello){
//   console.log(restHello[0])
//}

//console.log(...allNumbers);
//const result = sum(...allNumbers);

const koreanUnivStudent = {
    name : '김구름',
    major : '컴공',
    region : '서울',
};

//const {name,major,region} = koreanUnivStudent;
//name을 뺀 부분집합 객체를 만들고 싶다.
const {name,...rest} = koreanUnivStudent;
//나는 구조분해할당을 할건데 name을 뺀 나머지로 부분집합을 만들거야
console.log(rest);