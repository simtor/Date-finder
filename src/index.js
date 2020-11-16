const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});


rl.question("Please input the date: ", dateHandeler)
function dateHandeler(dateInput){
    console.log(dateInput);
    if(dateInput==='Q'||'q'){
        rl.close()
    }
}