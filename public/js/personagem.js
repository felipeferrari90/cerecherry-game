class Personagem{
    static numeroDeInstanciasAtuais = 0
    static primeiroMovimentoDaFase = null;
    
    //FLAGS
    primeiroMovimento = null;
    meMovi = null;
    movimentoConcluido = true;
    deixarRastro = true;
    
    id;
    pontoAtual 
    pontoPassado = null
    pontoFuturo = null
    ultimaDirecao = null
    tecladoEstaBloqueado = () => document.getElementsByClassName('modal-comments').length != 0;

    constructor(){
        this.numeroDeInstanciasAtuais++;
        this.id = Fase.numeroDeInstanciasAtuais;
        // elementoHTML?.dataCor = Banco.getCorPersonagem();
        document.body.addEventListener("keydown",this.mover.bind(this));
    }
    items = {
        espada : 0,
        raio : 0,
        milkshake: 0,
        R : 0
    };
    possoMeMover(ponto,direcao){
        console.log("CANO POSSO MOVER?: ",Canos.possoEntrar(ponto,direcao));
               //continue... 
        return Ponto.isTileOuCano(ponto) &&
               Fase.statusAtual != Fase.status.PERDEU &&
               Fase.statusAtual != Fase.status.GANHOU &&
               !(this.estouBloqueado(ponto,direcao)) &&
               !this.tecladoEstaBloqueado() &&
               Canos.possoEntrar(ponto,direcao);
               //continue... 
    }
    mover(event, movimento = { direcao : null , casas : 1, temRastro : true, tipo : "normal"}){

        switch(event?.keyCode){
           case 37:  movimento.direcao = Direcoes.ESQUERDA; break;
           case 38:  movimento.direcao = Direcoes.CIMA; break;         
           case 39:  movimento.direcao = Direcoes.DIREITA; break;
           case 40:  movimento.direcao = Direcoes.BAIXO; break;
           default:  if(!movimento.direcao) return       
        } 

        let direcao = movimento.direcao

        this.pontoAtual = document?.getElementsByClassName("current")[0]
        this.pontoAtual.classList?.remove("current");
        
        let altura = +this.pontoAtual?.id.replaceAll("tile-","").split("-")[0]
        let largura = +this.pontoAtual?.id.replaceAll("tile-","").split("-")[1]

        let xyFuturo = Direcoes.getCoordenadaXYporDirecao({x: altura,y: largura ,direcao, vezes : movimento.casas}) 
        this.pontoFuturo = document.getElementById(`tile-${xyFuturo.x}-${xyFuturo.y}`)
        console.log("Movimento:", movimento)

        if(this.possoMeMover(this.pontoFuturo,direcao)){
           movimento.temRastro ? this.fazerRastro(direcao,movimento.tipo) : false;
           Inicio.limpar();
           this.primeiroMovimentoDaFase = true;
           this.meMovi = true;
           this.ultimaDirecao = direcao
           this.pontoAtual.classList.remove("current");
           this.pontoFuturo.classList.add("current");
           this.pontoPassado = this.pontoAtual
           this.pontoAtual = this.pontoFuturo;
           this.pontoFuturo = null;
           this.atualizar();
           //this.movimentoConcluido = true;
        } else {
           this.pontoAtual.classList.add("current");
           this.meMovi = null
           this.pontoFuturo = null
        }
    }
   
    fazerRastro(direcao,tipo){
        //apenas adiciona as classes
        this.pontoAtual?.classList.add("trail-"+direcao)
        this.pontoFuturo?.classList.add("trail-"+Direcoes.getDirecaoOposta(direcao))

        //cria um elemento filho, coloca uma classe nele e adiciona no tile.
        let traco1 = document.createElement("div")
        traco1.classList.add("trace-"+direcao)
        tipo == "cano" ? traco1.style.border = "1px solid transparent": false;
        this.pontoAtual.appendChild(traco1)
        let traco2 = document.createElement("div")
        traco2.classList.add("trace-"+Direcoes.getDirecaoOposta(direcao))
        tipo == "cano" && Canos.ehCano(this.pontoFuturo) ? traco2.style.border = "1px solid transparent": false;
        this.pontoFuturo.appendChild(traco2)
    }
    atualizar(){
       
        let elementos = SpritesUtil.classesParaObjeto(this.pontoAtual,this.ultimaDirecao)
        console.log("elementos e ITEM", elementos, this.items.espada)

        if(elementos.cereja) this.comerCereja(elementos.cereja.nivel);

        //if((elementos.saldoEspada < this.items.espada) && (this.espadas.length > 0)) this.morrer();

        elementos.espadas?.forEach(
            (espada) => {
               if(espada.direcao == this.ultimaDirecao){
                   this.pegarEspada();
               }else{  
                   this.tucheEspada(); 
               }
            }
        )
        
        if(elementos.porao?.aberto) this.descerPorao();

        if(Canos.ehCano(this.pontoAtual)){
           this.mover(null,{direcao: Canos.mover(this.pontoAtual, this.ultimaDirecao), tipo: "cano",temRastro : true, casas: 1 })
        } 

        //atualiza a fase no final 
        if(Fase.statusAtual == Fase.status.JOGANDO) Fase.atualizar(this);
    }
    estouBloqueado(pontoHTML,direcao){
        let objeto = SpritesUtil.elementosDOMFilhoParaObjeto(pontoHTML)
        let rastrosDoPonto = objeto.rastros || []   
        if(rastrosDoPonto.includes(Direcoes.getDirecaoOposta(direcao))){
           return true
        }
        return false
    }
    comerCereja(nivel){
        if(Cereja.possoPegar(this.pontoAtual,nivel)){
            this.pontoAtual.classList.remove("cereja");
            this.pontoAtual.classList.remove("cereja-"+nivel);
        }else{
            this.morrer();
        } 
    }
    pegarEspada(){
        this.items.espada++;
        this.pontoAtual.classList.remove("espada");
        this.pontoAtual.classList?.remove("espada-"+this.ultimaDirecao);
    }
    tucheEspada(){
        this.items.espada > 0 ? this.items.espada-- : this.morrer() ;
    }
    descerPorao(){
        this.pontoAtual.classList.add("win");
        Fase.statusAtual = Fase.status.GANHOU;
        Fase.atualizar();
    }
    morrer(){
        this.pontoAtual.classList.add("dead")
        if(document.getElementsByClassName("cereja-2").length > 0){
            new Audio('./songs/zequinha bravo porque tinha um dois ali.mp3').play();
        }else{
            new Audio('./songs/zequinha ah mas me lasquei.mp3')?.play();
        }
        Fase.statusAtual = Fase.status.PERDEU; //mudar isso
    }
    
}
