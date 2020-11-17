const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});

// var weekdays = [{0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday'}]
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


rl.question("Please input the date: ", dateHandeler)
function dateHandeler(dateInput){
    console.log(dateInput);
    const day1 = new Date (dateInput);
    const day2 = day1.getDay();
    console.log(day2);
    if (day2===1){
      console.log('Monday')

    }
    console.log(weekdays[day2]);
    // var weekday= weekdays.;
    // console.log(weekday);
    if(dateInput==='Q'||'q'){
        rl.close()
    }
}