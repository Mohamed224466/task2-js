
const grades = [45, 78, 88, 92, 34, 56, 49, 67, 81, 100];

function getAverage(grades) {
    let sum = 0;
    for (let grade of grades) {
        sum += grade;
    }
    const average = sum / grades.length;
    
    if (average >= 50) {
        console.log(`The average grade is ${average}. Status: Passing`);
    } else {
        console.log(`The average grade is ${average}. Status: Failing`);
    }
    return average;
}

function filterPassed(grades) {
    return grades.filter(grade => grade >= 50);
}

function doubleGrades(grades) {
    return grades.map(grade => Math.min(grade + 10, 100));
}

const average = getAverage(grades);
const passedGrades = filterPassed(grades);
const updatedGrades = doubleGrades(grades);

console.log("Original Grades:", grades);
console.log("Passed Grades:", passedGrades);
console.log("Updated Grades:", updatedGrades);