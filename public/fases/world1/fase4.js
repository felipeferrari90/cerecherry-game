/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 4
let world = 1
let nome  = "Pegando por tras";
let comentarios = ["ESPADAS: existe uma forma de não morrer nas espadas, pegando pelo cabo delas"]

let pontos = [...Util.getReverso(["1-4","1-5","2-5","3-1","4-1","4-2","5-1","5-2","5-3"],{width: 5,height: 5})]
let inicios = ["1-2-cima"]
let poroes = ["5-4"]
let cerejas = ["2-1-1","3-5-1"]
let espadas = ["1-1-cima","2-2-cima","3-3-esquerda","4-4-baixo","5-5-esquerda"] 

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 5, 
    vertical: 5,
    cerejas , 
    espadas , 
    pontos, 
    poroes,
    inicios,
    numero,
    nome,
    comentarios,
    world : 1 
}); 

/****************************************************************************************************/
