class SpritesUtil{
    

    static classesParaObjeto(elementoHTML,ultimoMovimento){

          const objeto = {
            cereja : {nivel : null}, 
            espadas : [] , 
            porao: {aberto : null}, 
            saldoEspada : 0
          }


          //cereja
          if(elementoHTML?.classList.contains("cereja")){
             let cereja = [...elementoHTML.classList].find(e => /^cereja-/gmi.test(e)) || null
             objeto.cereja.nivel = +cereja.split("-")[1];
          }

          //espada
          if(elementoHTML?.classList.contains("espada")){
                let espadasEncontradas = []
                espadasEncontradas = [...elementoHTML.classList].filter((e) => { return /^espada-/gmi.test(e) })

                if(espadasEncontradas .length > 0){
                    
                    espadasEncontradas.forEach((espada)=>{
                        let listStrEspada = espada.split("-")
                        let objetoEspadaAux = {direcao : null}
                        let directionAux = null;
                        switch(listStrEspada[1]){
                            case "cima" : 
                                directionAux = Direcoes.CIMA; break;
                            case "baixo" : 
                                directionAux = Direcoes.BAIXO; break;
                            case "direita" : 
                                directionAux = Direcoes.DIREITA; break;
                            case "esquerda" : 
                                directionAux = Direcoes.ESQUERDA; break;
                        }
                        objetoEspadaAux.direcao = directionAux;
                        directionAux == ultimoMovimento ?  objeto.saldoEspada++ :  objeto.saldoEspada-- ;
                        objeto.espadas.push(objetoEspadaAux);
                        
                    }) 
                }   
          }
       

           //porão
           if(elementoHTML.classList?.contains("saida-open"))  objeto.porao.aberto = true ;

           //milkshake - WORLD 2

           //cadeado - WORLD 2

           //chave - WORLD 2

           //canos - WORLD 2
           
           return objeto
       } 

       static elementosDOMFilhoParaObjeto(elementoHTML){
           let objeto = { rastros : []}
           let filhosDoElementoHtml = elementoHTML?.children || [];
           [...filhosDoElementoHtml].forEach((filho)=>{
                filho.classList.contains("trace-"+Direcoes.ESQUERDA) ? objeto.rastros.push(Direcoes.ESQUERDA) : false;
                filho.classList.contains("trace-"+Direcoes.DIREITA) ? objeto.rastros.push(Direcoes.DIREITA) : false;
                filho.classList.contains("trace-"+Direcoes.CIMA) ? objeto.rastros.push(Direcoes.CIMA) : false;
                filho.classList.contains("trace-"+Direcoes.BAIXO) ? objeto.rastros.push(Direcoes.BAIXO) : false;
           })
           return objeto;
       }
    
}