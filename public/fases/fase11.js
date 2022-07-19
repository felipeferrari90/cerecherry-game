/****************************************************************************************************/
/*****************************************************************************************************/
/*
   TEMPLATE DE FASE, SALVE COM OUTRO NOME ESSE ARQUIVO ANTES DE EDITAR 
   PRESERVE ESSE ARQUIVO DE TEMPLATE DE FASE, NÃO EDITE OU SOBRESCREVA ELE.
   
   OBS: salve esse arquivo como ex: fase1.js, fase2.js ou fase332.js (caso nao exista o numero) 
        nesse formato e ele tem que estar dentro da pasta fases.
   

/*****************************************************************************************************/

//DEFINA O TAMANHO DA FASE E O NUMERO DE TILES HORIZONTAIS E VERTICAIS no construtor Fase

    //se você nao colocar argumento ele colocará 6 por default
    faseTemplate = new Fase(8,7); //n6ew Fase(TilesHorizontais,TilesVerticais)
 
    //DEFINA O NUMERO DA SUA FASE: (number)
    faseTemplate.faseNumber = 11

    //DEFINA O NOME DA SUA FASE: (string)
    faseTemplate.faseName = "Churrasquinho";

    //ADICIONE DESCRITIVOS DA SUA FASE (string - pode ter varios argumentos)
    faseTemplate.comments = []
/*****************************************************************************************************/

//DEFINA COORDENADAS DE PONTOS DE INICIO na string (separe por virgula para mais de um valor)

    //a string se separa por traço: (tile x)-(tile y)-(qual borda do tile ele colocara o icone inicio)

    //ex: fase.tilesStart.push("4-6-baixo","2-2-cima","5-6-esquerda","2-2-direita")
    faseTemplate.tilesStart.push("1-4-cima","3-8-cima") 

    //OBS: após esse processo a sua fase ja renderiza as bordas 

/*****************************************************************************************************/

//DEFINA AS COORDENADAS SAIDAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)

    //ex: fase.tilesEnd.push("5-3")
    faseTemplate.tilesEnd.push("5-1")

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS CEREJAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)-(numero da cereja) ex: 2 pra duck, 3 pra terno...

    //ex: fase.tilesCherry.push("5-4-1","7-5-1","3-3-2","4-5-4","4-3-3")
    faseTemplate.tilesCherry.push("1-3-1","2-4-1","2-5-1","2-6-1","2-7-2","3-4-1","3-5-1","3-6-1","3-7-1",
    "4-4-1","4-2-1","4-5-1","4-6-1","4-7-1","5-2-1","6-2-1","7-3-2")
    

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS ESPADAS DO JOGO na string

     //a string se separa por traço: (tile x)-(tile y)-(direcao no qual a espada vai apontar)

    //ex: fase.tilesSword.push("4-2-cima","6-4-cima","4-5-baixo")
    faseTemplate.tilesSword.push("2-3-direita","2-4-baixo","2-6-esquerda","3-2-baixo","3-4-direita",
    "3-5-baixo","3-6-cima","3-7-cima","4-1-cima","4-2-esquerda","4-4-baixo","4-5-cima","4-6-baixo","5-2-cima",
    "6-2-cima","6-7-direita","7-4-direita","7-5-esquerda","7-6-cima"
    )

/*****************************************************************************************************/

// DEFINA AS TILES NULAS (como se fosse um buraco onde o personagem nao se move até ele)

   //ex: fase.tilesNull.push("5-6","1-5","1-6","2-6")
   faseTemplate.tilesNull.push( "1-1","1-2","2-1","1-7","1-8","2-8","6-1","7-1","7-8",
   "6-8","7-2","7-7"
   )
  
/*****************************************************************************************************/

faseTemplate.renderFase();
document.body.addEventListener('keydown',faseTemplate.movePerson.bind(faseTemplate),false);
