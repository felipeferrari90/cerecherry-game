/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 6
let world = 1
let nome  = "a multiplicação de  ̶p̶ã̶e̶s̶  cerejas";
let comentarios = ["CEREJA-2: você não consegue pegar elas, a menos que todas as cerejas simples já tiverem sido pegas."]

let pontos = [...Util.getReverso(["1-1","1-2","2-1"],{width: 5, height: 5})]
let inicios = ["5-5-baixo"]
let poroes = ["1-4"]
let cerejas = ["1-3-1","1-5-2","2-2-2","2-4-2","3-1-1",
"3-3-1","3-5-1","4-2-2","4-4-2","5-3-1"]
let espadas = ["2-5-cima","3-4-esquerda","4-3-cima","5-2-esquerda"] 

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
    comentarios 
}); 

/****************************************************************************************************/
