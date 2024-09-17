function getGrade(marks){
    if(marks >90){
        return 'A';
    }
    else if(marks >= 70 && marks <= 90){
        return 'B';

    }
    else if(marks >=50 && marks < 70){
        return 'C';
    }
    else{
        return 'F';
    }
}

const marks = parseFloat(prompt("Enter the student's marks : "));
const grade = getGrade(marks);

console.log(`the student's grade is : ${grade} `);



