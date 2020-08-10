const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів: [["Саша", "Олена"], [..], [...]];
const girls = (students.slice(2,4) + ',' + students.slice(5)).split(',');
const boys =  (students.slice(0,2) + ',' + students.slice(4,5)).split(',');


function Pairs(boys, girls) {
    const result = [];

    for (let i = 0; i < girls.length; i++) {
        result.push([boys[i], girls[i]]);
    };
    return result;  
}

const pairs = Pairs(boys, girls); 
console.log('Розділені студенти на пари: ', pairs);

function themesFN(pairs, themes) {
  const result = [];

  for (let i = 0; i < themes.length; i++) {
      result.push(pairs[i], themes[i]);
  };
  return result;  
}

const lesson = themesFN(pairs, themes);
console.log('Пари студентів та їх теми: ', lesson);


function marksForStudentsFn (students, marks) {
    const result = [];

    for (let i = 0; i < students.length; i++) {
        result.push([students[i], marks[i]]);
    };
    return result; 
};
const marksAndStudents = marksForStudentsFn(students, marks);
console.log('Студент та його оцінка: ', marksAndStudents);


function studentsMarks(lesson) {
    const result = [];
    let randomMark = Math.ceil(Math.random() * 5);

    for (let i = 0; i < lesson.length; i++) {
        result.push(lesson[i], randomMark);
    };
    return result; 
};
const studentsrandMarks = studentsMarks(lesson);
console.log('Оцінка парі за виконаний проєкт: ', studentsrandMarks);
