/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 2
let world = 1
let nome  = "Preso no próprio rastro";
let comentarios = ["Ao andar por entre os pontos você não pode repetir um caminho"]

let pontos = ["1-2","1-3","1-4","1-5","2-2","2-5","3-1","3-2","3-3","3-4","3-5","4-1","4-2","4-3",
"5-1","5-2","5-3","6-1","6-2","7-2"]
let inicios = ["6-1-baixo"]
let poroes = ["7-2"]
let cerejas = ["1-4-1","4-1-1","5-3-1"]
let espadas = []

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 5, 
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
 


