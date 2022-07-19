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
    faseTemplate = new Fase(12,15); //n6ew Fase(TilesHorizontais,TilesVerticais)
 
    //DEFINA O NUMERO DA SUA FASE: (number)
    faseTemplate.faseNumber = 10

    //DEFINA O NOME DA SUA FASE: (string)
    faseTemplate.faseName = "Acabou o tutorial";

    //ADICIONE DESCRITIVOS DA SUA FASE (string - pode ter varios argumentos)
    faseTemplate.comments = []
/*****************************************************************************************************/

//DEFINA COORDENADAS DE PONTOS DE INICIO na string (separe por virgula para mais de um valor)

    //a string se separa por traço: (tile x)-(tile y)-(qual borda do tile ele colocara o icone inicio)

    //ex: fase.tilesStart.push("4-6-baixo","2-2-cima","5-6-esquerda","2-2-direita")
    faseTemplate.tilesStart.push("2-2-cima","8-4-direita","5-5-cima","13-6-cima","2-10-direita",
    "8-9-esquerda","6-9-direita","12-3-cima"
    ) 

    //OBS: após esse processo a sua fase ja renderiza as bordas 

/*****************************************************************************************************/

//DEFINA AS COORDENADAS SAIDAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)

    //ex: fase.tilesEnd.push("5-3")
    faseTemplate.tilesEnd.push("3-3","10-9")

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS CEREJAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)-(numero da cereja) ex: 2 pra duck, 3 pra terno...

    //ex: fase.tilesCherry.push("5-4-1","7-5-1","3-3-2","4-5-4","4-3-3")
    faseTemplate.tilesCherry.push("10-2-1","11-8-1","11-9-1",
"3-6-1","5-10-2","14-9-1","14-11-2","9-8-1","9-9-1",
"6-8-1","7-8-1"
)

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS ESPADAS DO JOGO na string

     //a string se separa por traço: (tile x)-(tile y)-(direcao no qual a espada vai apontar)

    //ex: fase.tilesSword.push("4-2-cima","6-4-cima","4-5-baixo")
    faseTemplate.tilesSword.push("9-6-baixo","13-10-baixo","9-1-cima","14-2-esquerda","13-7-direita",
    "12-4-direita","4-2-baixo","9-7-cima"
    )

/*****************************************************************************************************/

// DEFINA AS TILES NULAS (como se fosse um buraco onde o personagem nao se move até ele)

   //ex: fase.tilesNull.push("5-6","1-5","1-6","2-6")
   faseTemplate.tilesNull.push("1-2","1-3","1-1","1-7","1-8","1-9","1-10","1-11","1-12",
   "2-1","2-5","2-7","2-11","2-12","3-1","3-5","3-4","3-9","3-11","3-12","4-4","4-5","4-7","4-8",
   "4-9","4-11","4-12","5-3","5-8","5-12","6-1","6-5","6-10","6-12","7-1","7-2","7-3",
   "7-5","7-6","7-10","7-12","8-1","8-2","8-5","8-5","8-8","8-12","9-11","9-12",
   "10-3","10-4","10-6","10-10","10-11","10-12","11-3","11-6","11-7","11-11","11-12","12-1",
   "12-5","12-6","12-7","12-8","12-12","13-1","13-2","13-12","14-1","14-4","14-10",
   "15-1","15-6","15-7"
   )
  
/*****************************************************************************************************/

faseTemplate.renderFase();
document.body.addEventListener('keydown',faseTemplate.movePerson.bind(faseTemplate),false);
