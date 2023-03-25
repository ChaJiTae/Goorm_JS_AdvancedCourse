// function sayHello(name){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log(`내 이름은 ${name}이야`);
//             resolve(`${name}`); //resolve의 인자에는 Promise 객체의 리턴값을 준다.

//             //reject(); // 실행이 안되었을 경우
//         },2000);
//     } )
// }

// sayHello("민철")
//     .then((name)=>{console.log(`그래 안녕 ${name}아`)})
//     //.catch(()=>{//실행 안되었을 경우 실행할 문장})

function sayHello(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`내 이름은 ${name}`);
            resolve(`${name}`);
        },2000);
    })
}

async function foo1(name){
    const resultname = await sayHello(name);
    console.log("2초 뒤 실행될 코드");
}

foo1("민철");

function foo2(name){
    const resultname = sayHello(name);
    console.log("2초 뒤 실행될 코드");
}

foo2('민철');