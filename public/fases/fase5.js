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
    const faseTemplate = new Fase(9,8); //new Fase(TilesHorizontais,TilesVerticais)
 
    //DEFINA O NUMERO DA SUA FASE: (number)
    faseTemplate.faseNumber = 5

    //DEFINA O NOME DA SUA FASE: (string)
    faseTemplate.faseName = "Batalha de espadas";

    //ADICIONE DESCRITIVOS DA SUA FASE (string - pode ter varios argumentos)
    faseTemplate.comments = ["ESPADA: quando você pega uma espada por trás, ela é contabilizada como item, que você pode usar para atravesar uma outra espada pela lâmina, porém apenas uma unica vez, e depois você perde o item conquistado."]
/*****************************************************************************************************/

//DEFINA COORDENADAS DE PONTOS DE INICIO na string (separe por virgula para mais de um valor)

    //a string se separa por traço: (tile x)-(tile y)-(qual borda do tile ele colocara o icone inicio)

    //ex: fase.tilesStart.push("4-6-baixo","2-2-cima","5-6-esquerda","2-2-direita")
    faseTemplate.tilesStart.push("1-7-cima") 

    //OBS: após esse processo a sua fase ja renderiza as bordas 

/*****************************************************************************************************/

//DEFINA AS COORDENADAS SAIDAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)

    //ex: fase.tilesEnd.push("5-3")
    faseTemplate.tilesEnd.push("2-7")

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS CEREJAS DO JOGO na string

    //a string se separa por traço: (tile x)-(tile y)-(numero da cereja) ex: 2 pra duck, 3 pra terno...

    //ex: fase.tilesCherry.push("5-4-1","7-5-1","3-3-2","4-5-4","4-3-3")
    faseTemplate.tilesCherry.push("1-2-1","1-5-1","2-5-1","4-3-1","4-5-1",
    "3-9-1","5-2-1","5-4-1","6-3-1","8-3-1")

/*****************************************************************************************************/

//(OPCIONAL) DEFINA AS ESPADAS DO JOGO na string

     //a string se separa por traço: (tile x)-(tile y)-(direcao no qual a espada vai apontar)

    //ex: fase.tilesSword.push("4-2-cima","6-4-cima","4-5-baixo")
    faseTemplate.tilesSword.push("1-6-esquerda","2-1-direita","2-2-direita",
       "3-1-direita", "4-1-direita", "3-4-cima", "3-6-baixo","4-8-direita", "4-9-baixo","6-2-esquerda", "6-5-esquerda",
       "5-5-cima","5-7-baixo"
    )

/*****************************************************************************************************/

// DEFINA AS TILES NULAS (como se fosse um buraco onde o personagem nao se move até ele)

   //ex: fase.tilesNull.push("5-6","1-5","1-6","2-6")
   faseTemplate.tilesNull.push("1-3","1-8","1-9","2-9","5-7","5-8","5-9","6-7","6-8",
   "6-9","7-1","7-5","7-6","7-7","7-8","7-9","8-1","8-5","8-6","8-7","8-8","8-9","6-9","3-3",
   "3-5","3-7","5-3","5-5","7-3"
   )
  
/*****************************************************************************************************/

faseTemplate.renderFase();
document.body.addEventListener('keydown',faseTemplate.movePerson.bind(faseTemplate),false);
