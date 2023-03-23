// try {
//   console.log("try에 있는 문장");
//   const result = document.getElementById(id); //있지도 않음
// }
// catch(e){
//   console.log("catch에 있는 문장");
//   //console.log(e); //에러 정보 확인
//   //console.log(e.name); //에러의 이름정보만 확인
//   //console.log(e.message); //에러객체가 발생시킨 메시지
//   //console.log(e.stack); //자세한 에러에 대한 설명
// }
// finally{
//   console.log("finally에 있는 문장");
// }

try {
	console.log("try에 있는 문장");
	throw new Error("사용자가 정의한 에러가 발생했다!"); //Error 발생
}
catch(e){
	console.log("catch에 있는 문장");
  //console.log(e); //에러 정보 확인
  console.log(e.name); //에러의 이름정보만 확인
  console.log(e.message); //에러객체가 발생시킨 메시지
  //console.log(e.stack); //자세한 에러에 대한 설명
}
finally{
  console.log("finally에 있는 문장");
}