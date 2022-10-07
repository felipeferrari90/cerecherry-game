/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 3
let world = 1
let nome  = "Introduzindo a espada (em você)";
let comentarios = ["Ao andar por entre os pontos você não pode repetir um caminho"]

let pontos = [...Util.getReverso(["1-2","1-3","1-4","1-8","2-3","2-4","4-1","5-1","5-2",
"5-3","6-1","6-2","6-3","7-1","7-2","7-3","7-7","7-8"],{width: 8, height: 7})]
let inicios = ["1-1-cima"]
let poroes = ["6-6"]
let cerejas = ["1-5-1","1-6-1","1-7-1","2-5-1","2-6-1",
"2-7-1","3-5-1","3-6-1","3-7-1","3-8-1","4-5-1","4-6-1","6-7-1","7-5-1"]
let espadas = ["2-2-baixo","3-3-baixo","3-4-direita","4-7-cima",
"5-5-cima", "6-5-baixo", "5-7-baixo"] 

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 8, 
    vertical: 7,
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
