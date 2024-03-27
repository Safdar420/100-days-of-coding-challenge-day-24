//  Q no 70 

function printNumberWithlet(){
    for (let  i= 1; i <= 5; i++){
        console.log(i);
    };
};
printNumberWithlet();

//  Q no 71

let age:number = 20;
age = 22;
console.log(age);

const name1:string ="Safdar Ali";
try{
      name1 ="Safdar Ali Khan" 
}
catch(error){
    console.log("error: can't resign a const declare variable");
}

//  Q no 72

{
  let blockLet = "visible inside the block";

  const blockConst = "also only inside the block";

console.log(blockLet);

console.log(blockConst);
}
try{
    console.log(blockLet);
}catch(error){
    console.log("`blockLet` is not accessible outside the block.")
}
try{
    console.log(blockConst);;
}
catch(error){
    console.log("`blockLet` is not accessible outside the block.");
    
}



