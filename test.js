class Person {
  //constructor()
  constructor(name){
    this.name = name;
  }

  //method
  sayHello(){
    console.log(`안녕 나는 ${this.name}이야`);
  }
}

//인스턴스 생성
const minchul = new Person('minchul');
const jitae = new Person('jitae');
minchul.sayHello();
jitae.sayHello();

class Student extends Person{
  //constructor
  constructor(name,school,major){
    super(name);
    this.school = school;
    this.major = major;
  }

  //method
  getMajor(){
    console.log(`안녕 나는 ${this.name}이야, ${this.school}학교에 다니고 있고, ${this.major}이야`);
  }
}

const youngsu = new Student('강영수','무슨대','컴공');
youngsu.getMajor();