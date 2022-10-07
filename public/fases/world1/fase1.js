/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 1
let world = 1
let nome  = "Cerecherry - Objetivo";
let comentarios = ["Pegue todas as cerejas para abrir a porta, ao passar pela porta você passa de nivel"]

let pontos = ["1-2","1-3","1-4","2-1","2-2","2-4","3-1","3-4","4-1","4-3","4-4"]
let inicios = ["4-1-baixo"]
let poroes = ["4-3"]
let cerejas = ["2-1-1","1-3-1"]
let espadas = []

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase
const faseTemplate = new Fase({
    horizontal: 4, 
    vertical: 4 ,
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
 
