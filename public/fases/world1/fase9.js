/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 9
let world = 1
let nome  = "Ping-Pong";
let comentarios = []

let pontos = [...Util.getReverso(["4-1","5-1","6-1","4-7","5-7","6-7"],{width: 7, height: 9})]
let inicios = ["8-7-direita"]
let poroes = ["2-6"]
let cerejas = ["1-3-2","1-7-2","2-1-1","2-4-1","7-2-1","8-1-1","8-3-1",
"8-6-1","9-2-2","9-7-2","3-5-1","7-5-1", "3-3-1"]
let espadas = ["4-2-baixo","4-3-esquerda","4-4-direita",
"4-5-esquerda", "4-6-baixo", "5-2-direita", "5-3-baixo", "5-4-esquerda","5-5-baixo",
"5-6-cima", "6-2-esquerda","6-3-cima", "6-4-cima","6-5-direita","6-6-cima"] 

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


