//reference value=70km/hr
//car actual speed =okm/hr
//Demerit points= (Reference value+car speed) divide by 5
// console.log("licence suspended")

const read_line =require('readline')

const readline = read_line.createInterface({
    input: process.stdin,
    output : process.stdout
})
function carSpeed(){
        readline.question("Enter speed of the car (km/h)):",(inputSpeed) => {
            const speedLimit = 70;
            const demeritPoints = 5;
            if(speed <= speedLimit){
                console.log("Ok")
  }else {
    const overLimit = speed -speedLimit;
    const demeritPoints = math.floor(overLimit / demeritPoints);

    if(demeritPoints >12) {
        console.log("licence suspended");
       }  else {
        console.log ('Points:${demeritPoints}');
}
}
read.close();
        });
    }
    checkSpeed();
       
     