/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 5
let world = 1
let nome  = "Nesse perde e ganha";
let comentarios = ["ESPADA: quando você pega uma espada por trás, ela é contabilizada como item, que você pode usar para atravesar uma outra espada pela lâmina, porém apenas uma unica vez, e depois você perde o item conquistado."]

let pontos = [...Util.getReverso(["1-3","1-8","1-9","2-9","5-7","5-8","5-9","6-7","6-8",
"6-9","7-1","7-5","7-6","7-7","7-8","7-9","8-1","8-5","8-6","8-7","8-8","8-9","6-9","3-3",
"3-5","3-7","5-3","5-5","7-3"],{width: 9,height:8})]
let inicios = ["1-7-cima"]
let poroes = ["2-7"]
let cerejas = ["1-2-1","1-5-1","2-5-1","4-3-1","4-5-1",
"3-9-1","5-2-1","5-4-1","6-3-1","8-3-1"]
let espadas = ["1-6-esquerda","2-1-direita","2-2-direita",
"3-1-direita", "4-1-direita", "3-4-cima", "3-6-baixo","4-8-direita", "4-9-baixo","6-2-esquerda", "6-5-esquerda",
] 

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 9, 
    vertical: 8,
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


