let a = 60;
let b = 60;
let c = 60;

if(a + b + c === 180){
    console.log("true")
}
else if(a + b + c < 180){
    console.log("false")
}
else if(a < 0 | b < 0 | c < 0) {
    console.log("Ângulo inválido, erro.")
}