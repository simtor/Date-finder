const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


rl.question("Please input the date: ", dateHandeler)
function dateHandeler(dateInput){
    console.log(dateInput);
    const day1 = new Date (dateInput);
    const day2 = day1.getDay();
    // console.log(day2);
    console.log("It was a ",weekdays[day2]);
    if(dateInput==='Q'||'q'){
        rl.close()
    }
}