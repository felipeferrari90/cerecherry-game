/*****************************************************************************************************/
/*****************************************************************************************************/
/*
   TEMPLATE DE FASE, SALVE COM OUTRO NOME ESSE ARQUIVO ANTES DE EDITAR 
   PRESERVE ESSE ARQUIVO DE TEMPLATE DE FASE, NÃO EDITE OU SOBRESCREVA ELE.
   
   OBS: salve esse arquivo como ex: fase1.js, fase2.js ou fase332.js (caso nao exista o numero) 
        nesse formato e ele tem que estar dentro da pasta fases.
   
/*****************************************************************************************************/
/*****************************************************************************************************/
//   const Fase = require("../fase.js");
  import Fase from "../fase.js"
  
  //DEFINA O NUMERO DA SUA FASE: (number)

  //DEFINA O NOME DA SUA FASE: (string)

  //ADICIONE DESCRITIVOS DA SUA FASE (string - pode ter varios argumentos)

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase

    //se você nao colocar argumento ele colocará 6 por default
    const faseTemplate = new Fase(7,9); //new Fase(TilesHorizontais,TilesVerticais)

/*****************************************************************************************************/

//DEFINA COORDENADAS DE PONTOS DE INICIO na string (separe por virgula para mais de um valor)

    //a string se separa por traço: (tile x)-(tile y)-(qual borda do tile ele colocara o icone inicio)

    //ex: fase.tilesStart.push("4-6-baixo","2-2-cima","5-6-esquerda","2-2-direita")
    faseTemplate.tilesStart.push("9-7-baixo","2-7-direita", "8-1-esquerda","3-1-cima",) 

    //OBS: após esse processo a sua fase ja renderiza as bordas 

/*****************************************************************************************************/

//DEFINA AS COORDENADAS SAIDAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)

    //ex: fase.tilesEnd.push("5-3")
    faseTemplate.tilesEnd.push("7-7")

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS CEREJAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)-(numero da cereja) ex: 2 pra duck, 3 pra terno...

    //ex: fase.tilesCherry.push("5-4-1","7-5-1","3-3-2","4-5-4","4-3-3")
    faseTemplate.tilesCherry.push("2-3-1","4-1-1","7-1-1", "5-3-1","9-2-1", "5-7-2", "4-6-2","3-4-2","5-5-3","3-3-3")

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS ESPADAS DO JOGO na string

     //a string se separa por traço: (tile x)-(tile y)-(direcao no qual a espada vai apontar)

    //ex: fase.tilesSword.push("4-2-cima","6-4-cima","4-5-baixo")
    faseTemplate.tilesSword.push("2-6-direita","3-2-baixo", "4-7-esquerda","4-4-cima","7-4-cima","6-4-baixo", "7-3-esquerda", "7-6-esquerda", "9-6-esquerda", "7-5-esquerda","8-7-cima", "8-6-direita","6-7-cima","4-5-baixo")

/*****************************************************************************************************/

// DEFINA AS TILES NULAS (como se fosse um buraco onde o personagem nao se move até ele)

   //ex: fase.tilesNull.push("5-6","1-5","1-6","2-6")
   faseTemplate.tilesNull.push("1-1","1-2","1-3","1-4","2-1","6-1","6-2","5-1","6-6","6-5","5-6","1-5","1-6","1-7","9-1")
   Fase.CarrosselDeFases.push(faseTemplate);

/*****************************************************************************************************/

export default faseTemplate ;