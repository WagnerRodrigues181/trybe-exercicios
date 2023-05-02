let a = 5;
let b = 10;
let c = 2;

if(a > b && a > c){
    console.log(a + " é o maior dos três");
}
else if(b > a && b > c){
    console.log(b + " é o maior dos três");
}
else if(b === a && b === c){
    console.log("Os três iguais!");
}
else if(c > a && c > b){
    console.log(c + " é o maior dos três");
}
else{
    console.log("Insira valores válidos.")
}