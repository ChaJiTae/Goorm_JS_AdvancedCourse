//function a(){
//	console.log("2초가 걸리는 함수");
//}
//function b(){
//	console.log("a다음에 실행되어야하는 b함수");
//}
//setTimeout(a,2000);
//b();

function a(callback){
	setTimeout(function(){
		console.log("2초가 걸리는 a함수");
		callback();
	},2000);
}

function b(){
	console.log("a다음에 실행되어야하는 b함수");
}

a(b);