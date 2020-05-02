const fibonacci = () => {

    var resposta = [];
    var penultimo=0, ultimo=1;
    resposta.push(penultimo);
    resposta.push(ultimo);
    var numero;

    while(ultimo<=350){
       numero= ultimo + penultimo;
       penultimo = ultimo;
       ultimo=numero;
       resposta.push(ultimo);
    }

    return resposta; 
  }

  console.log(fibonacci());

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Escolha um número: "));

function isFibonnaci (number) {

   var vetor = fibonacci();

   vetor = vetor.filter(item => item == number);
   
   if (vetor.length > 0){
      return true;
   } else {
      return false;
   }

}

console.log(isFibonnaci(number));

//   module.exports = {
//      Fibonacci: fibonacci,
//      Isfibonnaci: fibonacci
//   };
	