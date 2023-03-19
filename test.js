const numArray = [1,2,3,4];
//배열의 길이 구하기
//console.log(numArray.length);

//배열의 값 지정하기
//const arr = [];
//arr[2] = 3;

//배열의 길이와 배열의 요소 갯수는 같은가? -> NO
//console.log(arr.length); // 3
//console.log(arr); //[ <2 empty items>, 3 ]

//배열을 직접적으로 건드리는 방식
numArray.push(5,6);
console.log(numArray);

//배열을 직접 건드리지 않는 방식
//const result = numArray.concat(7,8);
//console.log(numArray);
//console.log(result);

//배열을 직접적으로 건드리며 제거하는 메소드
numArray.pop();
console.log(numArray);