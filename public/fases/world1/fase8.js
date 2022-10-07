/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 8
let world = 1
let nome  = "Se trancando do lado de dentro";
let comentarios = ["SAÍDAS: os níveis alem de ter varios inícios podem ter varias portas de saída"]

let pontos = [...Util.getReverso(["1-2","1-3","1-1","1-5","1-6","1-7",
"2-1","2-2","2-7","3-1","4-1","5-7","6-7","7-8","8-1","8-6","8-7","7-7",
"9-1","9-2","9-3","9-4","9-5","9-6","9-7","6-2"
],{width: 7, height: 9})]
let inicios = ["1-4-cima"]
let poroes = ["3-3","3-5","5-3","5-5","7-3","7-5"]
let cerejas = ["4-7-1","5-6-1",
"5-2-2","7-6-1","3-4-1","4-3-1","4-5-1","5-4-1","6-3-1", "6-5-1","7-4-1","8-2-2","3-6-2"]
let espadas = ["2-3-esquerda","2-5-esquerda","2-6-esquerda",
"3-7-cima","4-4-direita",
"5-1-direita", "6-1-direita",
"7-1-direita", "6-4-esquerda", 
"8-3-cima"] 

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 7, 
    vertical: 9,
    cerejas , 
    espadas , 
    pontos, 
    poroes,
    inicios,
    numero,
    nome,
    comentarios 
}); 

/****************************************************************************************************/
