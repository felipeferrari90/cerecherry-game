/*******TEMPLATE DE FASE**********************************************************************************************/

let numero = 11
let world = 1
let nome  = "teste canos";
let comentarios = ["TESTE CANÃO"]

let pontos = ["1-1","1-2","1-3","1-4","2-1","2-2","2-3","2-4","3-1","3-2","3-3","3-4","4-1","4-2","4-3","4-4"]
let inicios = ["1-1-cima"]
let poroes = ["4-4"]
let cerejas = []
let espadas = [] 

let canos = {
    cima: [],
    direita : ["2-1"],
    esquerda : [],
    baixo : ["1-2"],
    horizontal: ["2-2","2-3","2-4","3-4"],
    vertical: ["2-2","3-2"],
    curvadoCimaDireita : ["4-2"],
    curvadoCimaEsquerda: ["3-5","4-3"],
    curvadoBaixoDireita : ["3-3"],
    curvadoBaixoEsquerda: ["2-5"],
    tresSaidas : []
}    

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
    canos
}); 

/****************************************************************************************************/
