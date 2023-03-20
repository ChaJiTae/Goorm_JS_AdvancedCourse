const student = {
    name : '김구름',
    number : '17',
};

const univStudent = {
    ...student,
    major : '컴퓨터공학과',
}

console.log(student);
console.log(univStudent);

const koreanUnivStudent = {
    ...univStudent,
    region : 'seoul',
}

console.log(koreanUnivStudent);