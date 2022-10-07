
class Fase{
    numero;
    mundo;
    nome;
    comentarios = [];
    ultimaFaseDoWorld = null;
    personagem;
    static status = { PERDEU: -1 , BLOQUEADO : -0, JOGANDO : 1, GANHOU : 2}
    static statusAtual;

    tamanhoHorizontal;
    tamanhoVertical;

    HTMLContainerFase;
    HTMLNumeroFase;
    HTMLNomeFase;
    HTMLCardWorld;

    constructor({horizontal = 6, vertical = 6 , pontos , cerejas , espadas , 
        inicios , poroes, nome, numero, comentarios, 
        canos = []  
    }){
       
        let numeroMundo = Banco.getMundoAtual()
       
        if(numeroMundo == 1){
            this.mundo = new Mundo({
                numero: 1 ,
                nome: "cerejeira",
                fase: {inicio : 1, termino: 10},
                cores: {
                    personagem : "green",
                    fundo : "#FFC478",
                    cadeadoFundo: "#2C5812",
                    texto : "red",
                    textoNumero : "red",
                    tile : "#E9EBED"
                }
            });
        } else if(numeroMundo == 2){
            this.mundo = new Mundo({
                numero: 2 ,
                nome: "gran cano",
                fase: {inicio : 11, termino: 18},
                cores: {
                    personagem : "green",
                    fundo : "#CCD6B9",
                    cadeadoFundo: "#2C5812",
                    texto : "#2C5812",
                    textoNumero : "#2C5812"
                }
            });
        }

        if(localStorage["screenChoice"] == "false") {
            this.HTMLContainerFase = document.getElementById('container-fase');
            this.HTMLNumeroFase = document.getElementById("fase-number");
            this.HTMLNomeFase = document.getElementById("fase-name");
            this.HTMLCardWorld = document.getElementById("world-card-"+this.world);
            this.HTMLNumeroFase.textContent = numero 
            this.HTMLNomeFase.textContent = nome;
            this.tamanhoHorizontal = horizontal;
            this.tamanhoVertical = vertical;
            this.numero = numero;
            this.world = world;
            this.comentarios = comentarios;
            this.renderizar(pontos,this.mundo.cores);
    
            new Espada(espadas);
            new Cereja(cerejas);
            new Porao(poroes);
            new Inicio(inicios);
            numero > 10 ? new Canos(canos) : false
    
            this.personagem = new Personagem();
            Fase.statusAtual = Fase.status.JOGANDO;
        } 
        if(localStorage["screenChoice"] == "true") {
            this.mundo.renderizarTelaFasesDoMundo();
        }   
    }
     
    renderizar(pontos,cores){
        if(localStorage["screenChoice"] == "false"){
            this.renderizarPontos(pontos);
            this.renderizarBordas();
            this.pintarTiles(cores.tile)
            // this.renderizarSombras();  IMPLEMENTAR DEPOIS
            this.setComentarios();
        }  
    }

    renderizarPontos(pontos){
        this.HTMLContainerFase.style.gridTemplateColumns = `repeat(${this.tamanhoHorizontal},1fr)`
        for (let linhaPontos = 1; linhaPontos < this.tamanhoVertical + 1; linhaPontos++) {
            for (let colunaPontos = 1; colunaPontos < this.tamanhoHorizontal + 1; colunaPontos++) {
                let spritePonto = document.createElement("div");
                pontos.some((ponto) => ponto === `${linhaPontos}-${colunaPontos}`) ? spritePonto.classList.add("tile") : spritePonto.classList.add("nully");
                spritePonto.style.width =  (window.innerWidth - 20) / this.tamanhoHorizontal 
                spritePonto.style.height =  (window.innerWidth - 20) / this.tamanhoHorizontal 
                //spritePonto.style.width =  30
                //spritePonto.style.height =  30
                spritePonto.id = "tile-"+linhaPontos+"-"+colunaPontos;
                this.HTMLContainerFase.appendChild(spritePonto);
            }
        }
    }

    setComentarios(){
            this.comentarios = this.comentarios.reverse();
            this.comentarios.forEach((comment,i) =>{
            let modalComments = document.createElement("div");
            modalComments.classList.add("modal-comments");
            let divSpeak =  document.createElement("div");
            divSpeak.textContent = comment;
            divSpeak.classList.add("speak");
            let quit = document.createElement("div");
            quit.classList.add("quit");
            this.HTMLContainerFase.appendChild(modalComments);
            modalComments.appendChild(divSpeak);
            divSpeak.appendChild(quit);
            quit.addEventListener("click",(e)=>{
                let balao = e.target.parentElement;
                let modal = e.target.parentElement.parentElement;
                balao.remove();
                modal.remove();
                Fase.habilitarScroll()
            });
        });   
    }
    static mostrarItems(items){
        let displayItems = document.getElementsByClassName("display-items")[0];
        document.getElementById("item-espada")?.remove();
        document.getElementById("item-raio")?.remove();
        document.getElementById("item-R")?.remove();

        let itemEspada = document.createElement("div")
        itemEspada.id = "item-espada";
        let itemRaio = document.createElement("div")
        itemRaio.id = "item-raio";
        let itemR = document.createElement("div")
        itemR.id = "item-R"

        if(items.raio > 0){ 
            itemRaio.textContent = items.raio
            displayItems.prepend(itemRaio);
        }
        if(items.R > 0){ 
            itemEspada.textContent = items.R
            displayItems.prepend(itemR);
        }
        if(items.espada > 0){ 
           itemEspada.textContent = +items.espada
           displayItems.prepend(itemEspada);
        }
     
    }
    renderizarBordas(){
        document.querySelectorAll(".tile").forEach(
            (elementDOM) => {  
                let y = +elementDOM.id.split("-")[1]
                let x = +elementDOM.id.split("-")[2]
                let elementCurrent = elementDOM
                if(elementCurrent.classList.contains("nully") == false){
                    let aux = document.getElementById('tile-'+(y-1)+'-'+x) || null
                    aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-cima"):false
                    aux = document.getElementById('tile-'+(y+1)+'-'+x) || null
                    aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-baixo"):false
                    aux = document.getElementById('tile-'+y+'-'+(x-1)) || null
                    aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-esquerda"):false
                    aux = document.getElementById('tile-'+y+'-'+(x+1)) || null
                    aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-direita"):false
                }
        })
    }
    pintarTiles(cores){
        let elementoTiles = document.getElementsByClassName("tile");    
        [...elementoTiles].forEach(element => {
            element.style.backgroundColor = cores.tile
        });
    }
    static habilitarScroll(){
        window.addEventListener("wheel", function (e) {
            document.getElementById('container-fase').scrollTop += e.deltaY;
        });
    }
    static atualizar(personagem){

        //verifica na fase se todas as cerejas foram pegas
        if(Cereja.getQuantidade() == 0) Porao.abrirPortas();

        //realiza alguma acao dependendo do status atual da fase
        switch(Fase.statusAtual) {
            case Fase.status.BLOQUEADO:
                document.body.removeEventListener("onkeydown",this.personagem?.mover.bind(personagem));
            break;
            case Fase.status.GANHOU:
                 setTimeout(() => { Tela.proximaFase(Banco.getFaseAtual(),Banco.getMundoAtual()) }, 1300);
            break;                           
            case Fase.status.JOGANDO:
                document.body.addEventListener("onkeydown",this.personagem?.mover.bind(personagem),"false");
            break;    
            case Fase.status.PERDEU:
                document.body.addEventListener("onkeydown",this.personagem?.mover.bind(personagem),"false");
            break; 
        }

        //display fases
        Fase.mostrarItems(personagem.items);
    }
}            






