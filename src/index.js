const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

console.log("Please input your date MM/DD/YYYY");

rl.question("Please input the date: ", dateHandeler)
function dateHandeler(dateInput){
    console.log(dateInput);
    const dateholder = new Date (dateInput);
    const weekdaySelector = dateholder.getDay();
    // console.log(day2);
    console.log("It was a ",weekdays[weekdaySelector]);
    if(dateInput==='Q'||'q'){
        rl.close()
    }
}