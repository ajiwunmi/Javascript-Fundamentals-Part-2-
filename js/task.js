

/*
        QUESTION 1: Create Student Objects
        Create an array called students with at least 5 student objects. Each student should have:

        id (number)
        name (string)
        age (number)
        grades (array of at least 3 numbers)
        Example:

        const students = [
        { id: 1, name: 'Alice Johnson', age: 20, grades: [85, 92, 78] },
        // Add 4 more students...
        ];

*/
console.log("--------QUESTION 1: Create Student Objects-------");
const students = [
    { id: 1, name: 'Alice Johnson', age: 20, grades: [85, 92, 78] },
    { id: 2, name: 'Bob Smith', age: 22, grades: [90, 88, 95] },
    { id: 3, name: 'Charlie Brown', age: 21, grades: [75, 80, 85] },
    { id: 4, name: 'Diana Prince', age: 23, grades: [95, 90, 92] },
    { id: 5, name: 'Ethan Hunt', age: 24, grades: [88, 92, 89] }
];
console.log(' Array of Students Objects:', students);

/*
    QUESTION 2: Calculate Averages
Write a function called calculateAverage that:

Takes an array of grades as a parameter
Returns the average of those grades
Rounds to 2 decimal places
Then use map() to add an average property to each student. Hint: You can use the .reduce() array method

Example:

function calculateAverage(grades) {
  // Your code here
}

const studentsWithAverage = students.map(student => {
  // Your code here
});
Expected output:

[
  { id: 1, name: 'Alice', age: 20, grades: [85, 92, 78], average: 85.00 },
  // ...
]

*/
console.log("--------QUESTION 2: Calculate Averages-------");

function calculateAverage(grades) {
  // Your code here
  const sumGrades = grades.reduce((sum, grade)=> sum + grade, 0);
//   console.log('Sum of Grades:', sumGrades);
//   console.log('Number of Grades:', grades.length);
//   console.log('Average:', (sumGrades / grades.length));
  
  return Math.round(sumGrades / grades.length);

}

const studentsWithAverage = students.map(student => {
     const average = calculateAverage(student.grades);
     return { ...student, average: average };
});

console.log('Students with Average:', studentsWithAverage);

console.log("--------QUESTION 3: Filter Students by Average-------");
/*
    QUESTION 3: Filter Passing Students
    Write a function called getPassingStudents that:

    Takes the students array as a parameter
    Returns only students with average >= 60
    Uses the filter() method
    Example:

    function getPassingStudents(students) {
    // Your code here
    }

    const passing = getPassingStudents(studentsWithAverage);
    console.log(passing); // Should show only students with average >= 60
*/
 function getPassingStudents(students) {
    return students.filter(student => student.average >= 60);    
}

const passing = getPassingStudents(studentsWithAverage);
console.log('Passing Students:', passing);

/*
  
QUESTION 4: Functions & Callbacks
Write a function called processStudents that:

Takes two parameters: a students array and a callback function
Applies the callback to each student and returns the resulting array
The callback receives a student object and returns a transformed version of it
Then write two separate callback functions to use with processStudents:

addLetterGrade(student) — adds a letterGrade property based on the student's average (A for 90+, B for 80+, C for 70+, D for 60+, F below 60)
addStatus(student) — adds a status property with the value "Pass" if average >= 60, or "Fail" if below 60
Example:

function processStudents(students, callback) {
  // Your code here
}

function addLetterGrade(student) {
  // Your code here
}

function addStatus(student) {
  // Your code here
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log(studentsWithGrades);
// Should show each student with a letterGrade property

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log(studentsWithStatus);
// Should show each student with a status property
Expected output:

[
  { id: 1, name: 'Alice', average: 85.00, letterGrade: 'B' },
  // ...
]

[
  { id: 1, name: 'Alice', average: 85.00, status: 'Pass' },
  // ...
]
*/

console.log("--------QUESTION 4: Functions & Callbacks-------");


function processStudents(students, callback) {
    return students.map(student => callback(student));
}

function addLetterGrade(student) {
    let letterGrade;    
    if (student.average >= 90) {
        letterGrade = 'A';
    } else if (student.average >= 80) {
        letterGrade = 'B';
    } else if (student.average >= 70) {
        letterGrade = 'C';
    } else if (student.average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return { ...student, letterGrade: letterGrade };
}

function addStatus(student) {
    const status = student.average >= 60 ? 'Pass' : 'Fail';
    return { ...student, status: status };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log('Students with Grades:', studentsWithGrades);


const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log('Students with Status:', studentsWithStatus);
