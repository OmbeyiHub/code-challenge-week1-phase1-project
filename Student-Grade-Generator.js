// A = 100 - 79
// B = 79 - 60 
// C = 59 - 49 
// D = 49 - 40 
// E = less 40
//let marks =72
//console.log("Hello Brenda")
const read_line =require('readline')

const readline = read_line.createInterface({
    input: process.stdin,
    output : process.stdout
})
function studentGrade(){
    readline.question("Hi students,please enter your mark(0-100)",(marks)=>{
        if(marks<0 || marks>=100) {
            console.log('Sorry! Invalid input.Please enter a number between 0 and 100')
        }
        else if(marks <= 100 && marks >= 79) {
            console.log('You Got A'); 
          } else if(marks < 79 && marks >= 60)
              console.log('You Got B'); 
          else if (marks < 59 && marks >= 49) {
              console.log('You Got C'); 
          }else if (marks <=40 && marks >= 0) {
              console.log ( 'You Got E')
          }
          else {
              console.log ('Out of Range')
          }
          readline.close()
    })
   
}

studentGrade()



        
    

    
