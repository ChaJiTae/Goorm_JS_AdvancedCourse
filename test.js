class Army{
  constructor(status,name){
    this.status = status;
    this.name = name;
  }

  sayIntroduce(){
    console.log(`${this.status}! ${this.name}입니다.`);
  }
}

const jitae = new Army('상병','차지태');
jitae.sayIntroduce();

class Turn extends Army{
  constructor(status,name,job){
    super(status,name);
    this.job = job;
  }

  sayIntroduceMyName(){
    console.log(`${this.status}! ${this.name}입니다. 보직은 ${this.job}입니다.`);
  }
}

const hu = new Turn('이병','이후','암호병');
hu.sayIntroduceMyName();