const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});


rl.question("Input song: ", dateHandeler)
function dateHandeler(selectedSong){
    if(selectedSong==='Q'){
        rl.close()
    }
}