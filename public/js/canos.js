class Canos{
    constructor(objetoCano){
        objetoCano.cima?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano-mario-cima")
            pontoHTML.appendChild(cano);
        })
        objetoCano.baixo?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano-mario-baixo")
            pontoHTML.appendChild(cano);
        })
        objetoCano.direita?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano-mario-direita")
            pontoHTML.appendChild(cano);
        })
        objetoCano.esquerda?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano-mario-esquerda")
            pontoHTML.appendChild(cano);
        })
        objetoCano.horizontal?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano")
            cano.classList.add("cano-horizontal")
            pontoHTML.appendChild(cano); 
        })
        objetoCano.vertical?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let numeroDeFilhosCano = pontoHTML.getElementsByClassName("cano-horizontal").length
            if(numeroDeFilhosCano > 0){
                pontoHTML.getElementsByClassName("cano-horizontal")[0].classList.add("cano-vertical");
            }else{
                let cano = document.createElement("div");
                cano.classList.add("cano")
                cano.classList.add("cano-vertical")
                pontoHTML.appendChild(cano);
            }
        })
        objetoCano.curvadoCimaDireita?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano")
            cano.classList.add("cano-curva-cima-direita")
            pontoHTML.appendChild(cano);
            pontoHTML.style.backgroundImage = "unset"
        })
        objetoCano.curvadoCimaEsquerda?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano")
            cano.classList.add("cano-curva-cima-esquerda")
            pontoHTML.appendChild(cano);
            pontoHTML.style.backgroundImage = "unset"
        })
        objetoCano.curvadoBaixoDireita?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano")
            cano.classList.add("cano-curva-baixo-direita")
            pontoHTML.appendChild(cano);
            pontoHTML.style.backgroundImage = "unset"
        })
        objetoCano.curvadoBaixoEsquerda?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano")
            cano.classList.add("cano-curva-baixo-esquerda")
            pontoHTML.appendChild(cano);
            pontoHTML.style.backgroundImage = "unset"
        })
        objetoCano.tresSaidas?.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            let cano = document.createElement("div");
            cano.classList.add("cano")
            cano.classList.add("cano-tres-saidas.svg")
            pontoHTML.appendChild(cano);
            
        })
    } 
    static possoEntrar(pontoHTML, direcao){
            let direcoesCano = new Set()
            let filhosDoElementoHtml = pontoHTML?.children || []            
            let filhosCanos = [...filhosDoElementoHtml].filter(
                filhosHTML => filhosHTML.classList.contains("cano")
            )
            if(filhosCanos.length == 0){
                return true;
            }
            [...filhosCanos].forEach(cano => {
                if(cano.classList.contains("cano-horizontal")){
                    direcoesCano.add(Direcoes.DIREITA);
                    direcoesCano.add(Direcoes.ESQUERDA);
                } 
                if(cano.classList.contains("cano-vertical")){
                    direcoesCano.add(Direcoes.CIMA);
                    direcoesCano.add(Direcoes.BAIXO);
                }
                if(cano.classList.contains("cano-curva-baixo-esquerda")){
                    direcoesCano.add(Direcoes.CIMA);
                    direcoesCano.add(Direcoes.DIREITA);
                } 
                if(cano.classList.contains("cano-curva-baixo-direita")){
                    direcoesCano.add(Direcoes.ESQUERDA);
                    direcoesCano.add(Direcoes.CIMA);
                }
                if(cano.classList.contains("cano-curva-cima-esquerda")){
                    direcoesCano.add(Direcoes.BAIXO);
                    direcoesCano.add(Direcoes.DIREITA);
                } 
                if(cano.classList.contains("cano-curva-cima-direita")){
                    direcoesCano.add(Direcoes.BAIXO)
                    direcoesCano.add(Direcoes.ESQUERDA);
                }
            }); 
            return [...direcoesCano].some(saidaCano => saidaCano == direcao)
    }
    static ehCano(pontoHTML){
        let filhosDoElementoHtml = pontoHTML?.children || []            
        let filhosCanos = [...filhosDoElementoHtml].filter(
            filhosHTML => filhosHTML.classList.contains("cano")
        )
        return filhosCanos.length > 0 ? true : null
    }
    static mover(pontoHTML , direcao){
        let objCanos = Canos.getTiposCanoParaObjeto(pontoHTML);
        console.log("OBJETOCANO: ", objCanos)
      
        if(objCanos.horizontal || objCanos.vertical){
          return direcao;
        }
        switch(direcao) {
            case Direcoes.CIMA:
                if(objCanos.curvadoBaixoDireita){
                    console.log("cima - curvadoBaixo: ",Direcoes.girarSentidoHorario(direcao))
                   return Direcoes.girarSentidoHorario(direcao)
                }
                if(objCanos.curvadoBaixoEsquerda){
                    console.log("cima - curvadoesq: ",Direcoes.girarSentidoAntiHorario(direcao))

                   return Direcoes.girarSentidoAntiHorario(direcao) 
                }
            case Direcoes.BAIXO:
                if(objCanos.curvadoCimaDireita){
                    console.log("baixo - curvadodir: ",Direcoes.girarSentidoAntiHorario(direcao))
                    return Direcoes.girarSentidoAntiHorario(direcao)
                }
                if(objCanos.curvadoCimaEsquerda){
                    console.log("baixo - curvadoesq: ",Direcoes.girarSentidoHorario(direcao))
                    return Direcoes.girarSentidoHorario(direcao) 
                  
                }    
            case Direcoes.DIREITA:
                if(objCanos.curvadoBaixoEsquerda){
                    console.log("dir -curvadobaixesq: ",Direcoes.girarSentidoHorario(direcao))

                    return Direcoes.girarSentidoHorario(direcao) 
                }
                if(objCanos.curvadoCimaEsquerda){
                    console.log("dir - curvadocimaesq: ",Direcoes.girarSentidoAntiHorario(direcao))

                    return Direcoes.girarSentidoAntiHorario(direcao)
                }
            case Direcoes.ESQUERDA:
                if(objCanos.curvadoBaixoDireita){
                    console.log("esq - curvadobaixdir: ",Direcoes.girarSentidoAntiHorario(direcao))

                    return Direcoes.girarSentidoAntiHorario(direcao)
                }
                if(objCanos.curvadoCimaDireita){
                    console.log("esq - curvadocimadir: ",Direcoes.girarSentidoHorario(direcao))

                    return Direcoes.girarSentidoHorario(direcao) 
                }
        } 
    }
    static getTiposCanoParaObjeto(pontoHTML){
        let objeto = {
            horizontal: null,
            vertical: null,
            curvadoCimaDireita : null,
            curvadoCimaEsquerda: null,
            curvadoBaixoDireita : null,
            curvadoBaixoEsquerda: null,
            tresSaidas : null
        }
        let filhosDoElementoHtml = pontoHTML.children || []            
        let filhosCanos = [...filhosDoElementoHtml].filter(
            filhosHTML => filhosHTML.classList.contains("cano")
        )
        filhosCanos.forEach((canoHTML)=>{
            if(canoHTML.classList.contains("cano-vertical")) objeto.vertical = true;
            if(canoHTML.classList.contains("cano-horizontal")) objeto.horizontal = true;
            if(canoHTML.classList.contains("cano-curva-cima-direita")) objeto.curvadoCimaDireita = true;
            if(canoHTML.classList.contains("cano-curva-cima-esquerda")) objeto.curvadoCimaEsquerda = true;
            if(canoHTML.classList.contains("cano-curva-baixo-direita")) objeto.curvadoBaixoDireita = true;
            if(canoHTML.classList.contains("cano-curva-baixo-esquerda")) objeto.curvadoBaixoEsquerda = true;
        })
        console.log("RETORNO CANO OBJETO",objeto)
        return objeto;
    }
}