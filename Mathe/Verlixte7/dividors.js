const readline = require("readline");
const scan = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
scan.question("Number: ", function (num) {
    console.log("Dividors of "+num+":")
    for(let i=2;i<num;i++){
        if(num%i==0){
            console.log(i);
        }
    }
  r_interface.close();
});