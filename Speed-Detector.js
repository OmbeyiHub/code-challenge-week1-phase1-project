//reference value=70km/hr
//car actual speed =okm/hr
//Demerit points= (Reference value+car speed) divide by 5
// console.log("licence suspended") 
const prompt =require('prompt-sync')()
const limit = 70;
let speed= Number(prompt("Enter Vehicle Speed"));
function pointCalculator(speed){
    if(isNaN(speed) || speed <=0){
        console.log('Invalid');
    } else {
        let demeritPoints = (speed - limit)/5
        if(demeritPoints > 12){
            console.log('Licence Suspended')
        }else {
            console.log('Your Points:${demeritPoints}');
        }
    }
}
pointCalculator(speed)  