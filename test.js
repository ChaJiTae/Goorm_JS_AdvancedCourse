//함수 내보내기
export const sayHello = (name) => console.log(`안녕하세요 ${name}입니다.`);

//변수나 상수 내보내기
export const name = "jtiae";
export let job = "통신";

//배열 내보내기
export const numArray = [1,2,3,4,5];

//객체 내보내기
export const armyObject = {
  name1 : "jitae",
  name2 : "gaon",
}

//클래스 내보내기
export class Army {
  constructor(age){
    this.age = age;
  }
}

import {모듈이름} from '모듈을 내보낸 파일이름';