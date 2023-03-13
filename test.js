var var2 = document.getElementsByName("passwd");
console.log(var2);

var var3 = document.getElementsByTagName("input");
console.log(var3);

// id 값에 어떤 값을 입력 -> 제출 버튼 클릭 --> 브라우저에서 "당신이 입력한 id값은 <입력한 값>입니다."

function getInputValue(name){
    var inputVal = document.getElementsByTagName("input")[0].value;
    alert(`당신이 입력한 값은 ${inputVal}입니다.`);
}


