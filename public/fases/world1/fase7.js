/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 7
let world = 1
let nome  = "O destino dos gananciosos";
let comentarios = ["INICIO: você pode escolher por onde começar. basta tocar no pontos onde são apontados pelos Is"]

let pontos = [...Util.getReverso(["3-2","3-3","3-8","4-2","7-4","8-3",
"8-4","8-6","8-7","8-8","9-6","9-7","9-8","2-2","7-8",
"2-3","2-4","2-5","2-8", "2-1","3-1","4-1","6-1" ,"7-1","8-1","9-1","6-3","6-4","6-2",
"1-1","1-2","1-3","1-4","1-5","1-7","1-8"],{width: 8, height: 9})]
let inicios = ["1-6-cima","5-1-cima","7-3-direita"]
let poroes = ["6-5"]
let cerejas = ["3-5-2","4-3-2","4-5-1","4-8-1",
"5-7-2","5-8-1","7-5-1","2-7-1"]
let espadas = ["3-4-baixo","3-6-baixo","3-7-baixo",
"4-4-direita", "4-6-baixo", "5-2-direita", "5-3-direita", "5-4-direita","5-5-direita",
"5-6-baixo", "6-6-baixo","6-7-cima", "6-8-direita"] 

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 8, 
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
