let divisor = 5;
let divident = 1;
let isVer;
let Stellen;
while(divident<=100){
    isVer = false;
    if(divident%divisor==0){
        console.log("Verflixt!");
    }else{
        Stellen = Math.floor(Math.log10(divident))+1;
        for(let i=0;i<Stellen;i++){
            if(divident.toString()[i]==divisor){
                isVer = true;
            }
        }
        if(isVer){
            console.log("Verflixt!");
        }else{
            console.log(divident);
        }
    }
    divident++;
}