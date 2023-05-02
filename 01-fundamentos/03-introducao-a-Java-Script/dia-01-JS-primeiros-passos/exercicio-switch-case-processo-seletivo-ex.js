let aprovacao = "Lista"

switch(aprovacao){
    case "Aprovada":
        console.log("Parabéns, você está no grupo de pessoas aprovadas!");
        break;
    case "Lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "Reprovada":
        console.log("Infelizmente, você reprovou");
        break;
    default:
        console.log("Informação incorreta");
        break;
}