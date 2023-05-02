/* não sei jogar xadrez, nem o movimento das peças :-(*/
let peça = "peão";
peça = peça.toLocaleLowerCase();
switch(peça){
    case "peão":
        console.log("movimento do peão");
        break;
    case "bispo":
        console.log("diagonais");
        break;
    case "cavalo":
        console.log("movimento do cavalo");
        break;
    default:
        console.log("Insira uma peça válida.");
}