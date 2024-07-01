##Student-Grade-Generator
First will create an interface to call the function that outputs and inputs the students grade which is "const  read_line =require('readline')"
Then we return the stream using const readline = read_line.createInterface
    input: process.stdin,
    output : process.stdout
Then we display the output question by writting :
function studentGrade()
    readline.question"Hi students,please enter your mark(0-100)",(marks)=>
        if(marks<0 || marks>=100) it should output the statement " Sorry! Invalid input.Please enter a number between 0 and 100"
Use else....else if syntax to do the student grading