// A = 100 - 79
// B = 79 - 60 
// C = 59 - 49 
// D = 49 - 40 
// E = less 40
//let marks =72
//console.log("Hello Brenda")

const prompt =require('prompt-sync');
let marks = prompt("insert your marks");
function studentGrade(marks){
         if(marks <= 100 && marks >= 79) {
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
        }
        studentGrade(72)
    






        
    

    
