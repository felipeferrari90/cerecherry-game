class Mundo{
    numero = "";
    nome = "";

    numeroTotalFases = 0;
    primeiraFase;
    ultimaFase;
    getPorcentagemFasesPassadas = () => Math.ceil(Banco.getFasesPassadas() + 1 - this.primeiraFase / ( this.primeiraFase + this.numeroTotalFases) * 100)
   
    static proximoWorld = this.numero == this.ultimaFase ? true : null
    constructor({numero, nome, fase = { inicio, termino}, cores = { fundo , texto, personagem, cadeadoFundo, textoNumero, contorno, tile }}){
        this.numero = numero;
        this.nome = nome;
        this.primeiraFase = fase.inicio;
        this.ultimaFase = fase.termino;
        this.numeroTotalFases = fase.termino - fase.inicio;
        this.cores = cores;

        document.body.style.backgroundColor = cores.fundo;

        document.getElementById("fase-number").style.color = cores.texto 
        document.getElementById("fase-name").style.color = cores.texto 

        let svgButtonRefresh = document.getElementById("svg-button-refresh-path-1");
        let svgButtonRefresh2 = document.getElementById("svg-button-refresh-path-2");
        let buttonAllFasesPath = document.getElementById("button-allfases-path-1");
        let buttonAllFasesPath2 = document.getElementById("button-allfases-path-2");
        let buttonAllFasesPath3 = document.getElementById("button-allfases-path-3");
        let buttonAllFasesPath4 = document.getElementById("button-allfases-path-4");

        svgButtonRefresh.style.stroke = cores.texto 
        svgButtonRefresh2.style.stroke = cores.texto 
        buttonAllFasesPath.style.stroke = cores.texto 
        buttonAllFasesPath2.style.stroke = cores.texto 
        buttonAllFasesPath3.style.stroke = cores.texto 
        buttonAllFasesPath4.style.stroke = cores.texto 
        
        document.getElementById("fase-name").style.color = cores.texto 

        let elementoLevelsPassed = document.getElementsByClassName("level-passed");    
        [...elementoLevelsPassed].forEach(element => {
            element.style.color = cores.textoNumero
        });

        let elementoLevelsLocked = document.getElementsByClassName("level-locked");    
        [...elementoLevelsLocked].forEach(element => {
            element.style.color = cores.textoNumero
        });

        let tilesWithBorders = document.getElementsByClassName("border-cima");  
        console.log("tiles with borders", tilesWithBorders) ; 
        [...tilesWithBorders].forEach(element => {
            element.border.color = "red"
        });

        //setando dados no html (ver com diego)
        //htmlCard = document.getElementById("card-world-"+number);
        //ver as coisas que o diego ta fazendo 

    }
    status = {
        DISPONIVEL : 1,
        BLOQUEADO : 0,
        EM_DESENVOLVIMENTO : -1
    }
   

    irAteTelaDeFases(numeroDoWorld){
        Banco.setMundoAtual(numeroDoWorld)
        Banco.setCorPersonagem(this.cores.personagem)
        //comando pro allFases mudar pra true
        Tela.trocar(Tela.TELA_MUNDO)
    }
    irAteTelaTodosOsMundos(){
        Tela.trocar(Tela.TELA_TODOS_MUNDOS)
    }
    irAteFase(numeroDaFase){
        Banco.setFaseAtual(numeroDaFase)
        //comando pro allFases mudar pra false
        Tela.trocar(Tela.TELA_FASE);
    }
    
    renderizarTelaFasesDoMundo(){
            console.log("chamou funcao renderizar telas")
            document.getElementById("container-game").classList.add("screenAllFases")
            document.getElementById("fase-number").textContent = this.numero
            document.getElementById("fase-name").textContent = this.nome
            document.getElementsByClassName("display-items")[0].innerHTML = "mundos"; 
    
            let containerFase = document.getElementById("container-fase");
            containerFase.style.gridTemplateColumns = 'none';
      
    
            let containerGridLevels = document.createElement('div');
            containerGridLevels.classList.add('container-grid-levels');
            containerFase.appendChild(containerGridLevels);
    
            console.log("PRIMEIRA ULTIMA FASE", this.primeiraFase, this.ultimaFase)
            for(let i = this.primeiraFase; i <= this.ultimaFase; i++){
                
                let buttonLevel = document.createElement('div');
                buttonLevel.classList.add('button-level');
                buttonLevel.textContent = i;
              
                let handleFaseFunction = () => Tela.carregarFase(i);
                if(i <= Banco.getFasesPassadas()){
                    buttonLevel.classList.add("level-passed");
                    buttonLevel.addEventListener("click" , handleFaseFunction )
                }
                if(i == Banco.getFasesPassadas() + 1){    
                    buttonLevel.classList.add("level-current");
                    buttonLevel.addEventListener('click', handleFaseFunction )
                }
                if(i > Banco.getFasesPassadas()+ 1){
                    buttonLevel.classList.add("level-locked");
                }
                containerGridLevels.appendChild(buttonLevel);
            }
    }
}

