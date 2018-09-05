var personagens = [

	{
		"id": "rachel",
		"nome": "Rachel",
		"perguntas": [
			"Quem já trabalhou na Ralph Lauren?",
			"É a mãe da Emma Geller?"
		]
	},
	{   "id": "ross",
		"nome": "Ross",
		"perguntas": [
			"Quem foi o primeiro do grupo a se casar?",
			"Adotou um macaco chamado Marcel?"
		]
	},
	{   "id": "joey",
		"nome": "Joey",
		"perguntas": [
			"Tem 7 irmãs?",
			"Foi o  Dr. Drake Ramoray em  Days of Our Lives?"
		]
	},
	{   "id": "monica",
		"nome": "Monica",
		"perguntas": [
			"Sempre sonhou em ter filhos?",
			"Já amorou o melhor amigo de seu pai?"
		]   
	},

	{
		"id": "chandler",
		"nome": "Chandler",
		"perguntas": [
			"Namorou a Janice?",
			"É filho de uma transexual?"
		]
	},
	{
		"id": "phoebe",
		"nome": "Phoebe",
		"perguntas": [
			"Foi mãe de trigêmeos",
			"Compositora de  Smelly Cat"
		]
	}
];


var checagem_perguntas = [];
var checagem_pergunta;
var check = true;


for (var i = 0; i <personagens.length; i++) {
	console.log(personagens[i].perguntas);
	checagem_pergunta = personagens[i].perguntas;
	//console.log(checagem_pergunta);
   if (check = true) {

	   for (var j = 0; j < checagem_pergunta.length; j++) {
	   	//console.log(checagem_pergunta[j]);

		  if (checagem_perguntas = !checagem_pergunta[j]) {
			checagem_perguntas = checagem_perguntas.push(checagem_pergunta[j]);
			check = false;
		   }

	   }

   }

   else{
	   	console.log("fim");
	   }


	};

console.log(checagem_perguntas);

var personagem;
var contadorAcertos = 0;
var contadorErros = 0;

function selecionar_frase_aleatoria() {
	var indice_aleatorio = Math.floor(Math.random() * personagens.length);
	personagem = personagens[indice_aleatorio];
	var perguntas = personagem.perguntas;
	var indice_aleatorio_pergunta = Math.floor(Math.random() * perguntas.length);
	console.log(indice_aleatorio);
	var pergunta = perguntas[indice_aleatorio_pergunta];
	var bloco_frase = document.getElementById("frase");
	var bloco_resposta = document.getElementById("resposta");

	bloco_frase.innerText = pergunta;
	// bloco_resposta.innerText = resposta;

}

var bloco_classe = document.getElementsByClassName("personagem");
selecionar_frase_aleatoria();

var bloco_acertos = document.getElementById("acertos");
var bloco_erros = document.getElementById("erros");
var bloco_vencedor = document.getElementById("vencedor");
var bloco_perdedor = document.getElementById("perdedor");
var jogo_finalizado = false;

for (var i = 0; i <bloco_classe.length; i++) {
	bloco_classe[i].onclick = function(){
		bloco_vencedor.innerText = "";
		bloco_perdedor.innerText = "";

		console.log(this.id);
		console.log(personagem.id);
		if (personagem.id == this.id){
			console.log("foi");
			contadorAcertos++;
			console.log(contadorAcertos);
			bloco_acertos.innerText = contadorAcertos;

			if (contadorAcertos == "5"){
				bloco_vencedor.innerText = "Parabéns, Você ganhou!!";
				jogo_finalizado = true;

				if(jogo_finalizado){
					contadorAcertos = 0;
				}
			}
		}
		else{
			console.log("está errado");
			contadorErros++;
			console.log(contadorErros);
			bloco_erros.innerText = contadorErros;
			if (contadorErros == "3"){
				bloco_perdedor.innerText = "Que pena, você perdeu!!";
				jogo_finalizado = true;

				if(jogo_finalizado){
					contadorErros = 0;

				}

			}
		}
		selecionar_frase_aleatoria();

	};
}





