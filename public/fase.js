class Fase{
    faseNumber = 0;
    faseName;
    comments = [];

    DOMcontainerFase = document.getElementById('container-fase');
    currentTile;
    tilesWidth;
    tilesHeight;
    tilesWall = [];
    tilesCherry = [];
    tilesSword = [];
    tilesR = [];
    tilesStart = [];
    tilesEnd = []
    tilesNull = []
    items = {
        espada : 0,
        raio : 0,
        R : 0
    };
    eleMoveu = null;
    firstMove = null;
    constructor(tilesWidth, tilesHeight  ){
        this.tilesWidth = tilesWidth || 6,
        this.tilesHeight = tilesHeight || 6
    }
    renderFase(){
        if(localStorage["screenChoice"] == "false"){
    
            let divFaseNumber = document.getElementById("fase-number");
            let divFaseName = document.getElementById("fase-name");
            divFaseNumber.textContent = this.faseNumber;
            divFaseName.textContent = this.faseName;
            
            this.DOMcontainerFase.style.gridTemplateColumns = `repeat(${this.tilesWidth },1fr)`
            for (let tileY = 1; tileY < this.tilesHeight + 1; tileY++) {
                 for (let tileX = 1; tileX < this.tilesWidth + 1; tileX++) {
                     let tileDom = document.createElement("div")
                     tileDom.classList.add("tile")
                     tileDom.style.width = (window.innerWidth - 20) / this.tilesWidth
                     tileDom.style.height = (window.innerWidth - 20) / this.tilesWidth
                     tileDom.id = "tile-"+tileY+"-"+tileX
                     this.DOMcontainerFase.appendChild(tileDom)
                     this.verifyNull(tileX,tileY)
                 }
            }
          
            //this.applicateZoom() - NOT USABLE
            this.tilesWall.forEach((coord) => {
                let tile = document.getElementById('tile-'+coord)
                tile?.classList.add('wall')
            })
            this.renderCherrys();
            this.tilesSword.forEach((coord) => {
               let semCabo = coord.split("-").pop() === "semcabo" ? true : false;
               console.log(coord, semCabo)
               let directionSword = coord.split("-").slice(2,3)
               let coordSword = coord.split("-").slice(0,2).join("-") 
               let tile = document.getElementById('tile-'+coordSword)
               tile?.classList.remove('point')
               tile?.classList.add('espada-'+directionSword)
               tile?.classList.add("cabo")
               if(semCabo == true){
                  tile?.classList.remove("cabo");
               }
            })
            this.renderInits()
            this.tilesEnd.forEach((coord) => {
               let tile = document.getElementById('tile-'+coord)
               tile?.classList.add('saida-closed')
            })
            console.log(document.querySelectorAll(".tile").length)
            document.querySelectorAll(".tile").forEach(
                (elementDOM) => {  
                    this.renderBordersFase(elementDOM)
            })
            this.renderComments();
         }
   
       
    }
    renderComments(){
            this.comments = this.comments.reverse();
            this.comments.forEach((comment) =>{
                let modalComments = document.createElement("div");
                modalComments.classList.add("modal-comments");
                let divSpeak =  document.createElement("div");
                divSpeak.textContent = comment;
                divSpeak.classList.add("speak");
                let quit = document.createElement("div");
                quit.classList.add("quit");
                this.DOMcontainerFase.appendChild(modalComments);
                this.DOMcontainerFase.appendChild(divSpeak);
                //modalComments.appendChild(divSpeak);
                divSpeak.appendChild(quit);
                quit.addEventListener("click",(e)=>{
                   console.log("evento funciona");
                   let balao = e.target.parentElement;
                   let modal = e.target.parentElement.previousSibling;
                   balao.remove();
                   modal.remove();
                });
             
           });   
    }
    isBlockedKeyBoard = () => document.getElementsByClassName('modal-comments').length != 0;
    displayItems(){
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
        if(this.items.raio > 0){ 
            itemRaio.textContent = +this.items.raio
            displayItems.prepend(itemRaio);
        }
        if(this.items.R > 0){ 
            itemEspada.textContent = +this.items.R
            displayItems.prepend(itemR);
        }
        if(this.items.espada > 0){ 
           itemEspada.textContent = +this.items.espada
           displayItems.prepend(itemEspada);
        }
     
    }
    applicateZoom(){
        let biggestSize = this.tilesHeight >= this.tilesWidth ? this.tilesHeight : this.tilesWidth  
        this.DOMcontainerFase.style.zoom = 1 * ( 1 / (16.6 * (biggestSize / 100))) 
    }
    verifyNull(x,y){
        let aux = y+"-"+x
        this.tilesNull.includes(aux) ? document.getElementById('tile-'+y+'-'+x).classList.add('nully'):false
    }
    renderBordersFase(elementDOM){
        let y = +elementDOM.id.split("-")[1]
        let x = +elementDOM.id.split("-")[2]
        let elementCurrent = elementDOM
        if(elementCurrent.classList.contains("nully") == false){
            let aux = document.getElementById('tile-'+(y-1)+'-'+x) || null
            console.log(elementCurrent,'CIMA',aux)
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-cima"):false
            
            aux = document.getElementById('tile-'+(y+1)+'-'+x) || null
            console.log(elementCurrent,'BAIXO',aux)
            console.log('emquestao:','tile-'+(y+1)+'-'+x)
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-baixo"):false

            aux = document.getElementById('tile-'+y+'-'+(x-1)) || null
            console.log(elementCurrent,'ESQUERDA',aux)
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-esquerda"):false

            aux = document.getElementById('tile-'+y+'-'+(x+1)) || null
            console.log(elementCurrent,'DIREITA',aux)
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-direita"):false
        }
       
    }
    renderInits(){
        this.tilesStart.forEach((coord,index) => {
            console.log(coord)
            let coordDirection = coord.split("-").pop()
            let coordNumbers = coord.split("-").slice(0,2).join("-")
            let element = document.getElementById("tile-"+coordNumbers)
            let elementDiv = document.createElement("div")
            elementDiv.classList.add("inicio")
            elementDiv.classList.add("inicio-"+coordDirection)
            element.appendChild(elementDiv)
            element.addEventListener("click",this.addInitCurrent.bind(this),true) 
            this.tilesStart[index] = element
        }) 
        this.tilesStart[0].classList.add("current")
        this.currentTile = this.tilesStart[0];
    }
    addInitCurrent(e){
        if(!this.firstMove){
            let elementWithCurrent = document.getElementsByClassName("current")[0];
            elementWithCurrent?.classList.remove("current")
            console.log(e.target, elementWithCurrent, "clicou")
            this.tilesStart.forEach((element)=>{ element.classList.remove("current")})
            let elementEvent = e.target.classList.contains("inicio") ? e.target.parentNode : e.target
            elementEvent.classList.add("current")
            this.currentTile = elementEvent
        }
    }
    atualizarFase(){
       let classesList = [...this.currentTile.classList]
       if(classesList.some(e => /^cereja-/gmi.test(e))){    
          let cherryClass = classesList.find(e => /^cereja-/gmi.test(e))
          this.harvestCherry(cherryClass.split('-')[1])
          if(this.tilesCherry[this.tilesCherry.length - 1].length == 0){
             document.querySelectorAll(".saida-closed")?.forEach((tile,i)=>{
                tile.classList.add("saida-open")
                if(i == 0){
                    new Audio("./songs/zequinha eu nao ganhei nao.mp3")?.play();  
                }
             })
          }
       }
       if(this.currentTile.classList.contains("saida-open")){
          this.currentTile.classList.add("win")
          this.won();
       } 
    }
    renderCherrys(){
       let arrayCherrysRendered = []
       this.tilesCherry.forEach((coord) => {
            let cherryNumber = coord.split("-").pop()
            let cherryCoord  = coord.split("-").slice(0,2).join("-") 
            let tile = document.getElementById('tile-'+cherryCoord)
            tile?.classList.add('cereja-'+cherryNumber)
            arrayCherrysRendered.push(+cherryNumber)
       })
       this.tilesCherry = []
       arrayCherrysRendered = arrayCherrysRendered.sort((a,b) => a-b)
       arrayCherrysRendered.forEach((num,_,arrayCherrysRendered) => {
           let arrayCherryFamily = arrayCherrysRendered.filter((e,i) => e.toString() === num.toString())
           this.tilesCherry[num-1] == null ? this.tilesCherry.push(arrayCherryFamily) : false
       })    
    }
    renderPerson(currentTile){
        this.currentTile = document.getElementById(currentTile);
        this.currentTile?.classList.add("current")
        this.atualizarFase()
    }
    movePerson(event){  
        
        let direction = null;
        let y = +this.currentTile.id.replaceAll("tile-","").split("-")[0]
        let x = +this.currentTile.id.replaceAll("tile-","").split("-")[1]
        this.currentTile.classList.remove("current");
        switch(event.keyCode){
           case 37: x-=1; direction = "esquerda"; break;
           case 38: y-=1; direction = "cima"; break;         
           case 39: x+=1; direction = "direita"; break;
           case 40: y+=1; direction = "baixo"; break;        
        } 
        let tileFuture = document.getElementById(`tile-${y}-${x}`) || null
        if(this.canMove(x,y,direction,tileFuture)){
           this.currentTile.classList.add("trail-"+direction)
           tileFuture?.classList.add("trail-"+this.trailReverse(direction))
           this.makeTrace(this.currentTile,direction);
           this.renderPerson("tile-"+y+"-"+x);
           this.makeTrace(tileFuture,this.trailReverse(direction));
           this.refreshTraces();
           this.firstMove = true;
           this.eleMoveu = true;
        } else {
            this.currentTile.classList.add("current");
            this.eleMoveu = null;
            tileFuture == null
        }
        if(this.currentTile.classList.contains('espada-'+direction) && this.currentTile.classList.contains("cabo")){
            this.getSword(direction); 

        } 
        if( (this.currentTile.classList.contains("espada-cima") || 
            this.currentTile.classList.contains("espada-baixo") ||
            this.currentTile.classList.contains("espada-esquerda") ||
            this.currentTile.classList.contains("espada-direita"))
        ){
            if(this.currentTile.classList.contains('espada-'+direction) && this.currentTile.classList.contains("cabo")){
                this.getSword(direction)
            }else{
               
              if(this.eleMoveu){
                 this.items.espada == 0 ? this.morrer() : false;
                 this.items.espada-- 
                 this.eleMoveu = null;
                 if(this.items.espada == 1)
                     new Audio('./songs/zequinha eu posso morrer uma vez.mp3')?.play() 
                 else if(this.items.espada >= 0){
                     new Audio('./songs/zequinha puta que la mierda.mp3')?.play();
                 }
              }
                
                this.displayItems();   
            }
        } 
    }
    getSword(direction){
        if(this.eleMoveu){
            if( this.faseNumber !== 4){
               this.items.espada++; 
            }
            this.currentTile.classList.remove("espada-"+direction);
            this.currentTile?.classList.remove("cabo");
            this.displayItems(); 
            new Audio("./songs/zequinha falando pego.mp3")?.play();   
        }

    }
    harvestCherry(valueCherry){
        console.log("foi"+valueCherry)
        this.currentTile?.classList.remove("cereja-"+valueCherry)
        this.tilesCherry[valueCherry - 1].shift()
        new Audio('./songs/zequinha Falando Cume.mp3')?.play();
    }
    canMove(x,y,direction,tileFuture){
        if(direction == null || 
           tileFuture == null || 
           !(tileFuture?.classList.contains("tile")) ||
           tileFuture?.classList.contains("wall") ||
           tileFuture?.classList.contains("nully") ||
           tileFuture?.classList.contains("trail-"+this.trailReverse(direction))||
           this.currentTile.classList.contains("dead") ||
           this.currentTile.classList.contains("win") ||
           this.notGetCherry(tileFuture) ||
           this.isBlockedKeyBoard()
           ){           
            return false;
        }
        return true
    }
    notGetCherry(tileFuture){
       let aux = false
       if(tileFuture == null) return true;
       let cherryClass = [...tileFuture?.classList].find(e => /^cereja-/gmi.test(e)) || null
       if(cherryClass != null){
        let numberClass = +cherryClass?.split("-")[1]
        this.tilesCherry.forEach((e,i) => {
            if(i+1 < numberClass){
               if(e.length > 0){
                   aux = true;
               } 
            }
        })
      }
      return aux? true: false;
    }
    morrer(){
        this.currentTile.classList.add("dead")
        if(document.getElementsByClassName("cereja-2").length > 0){

            new Audio('./songs/zequinha bravo porque tinha um dois ali.mp3')?.play();
        }else{
            new Audio('./songs/zequinha ah mas me lasquei.mp3')?.play();
        }
    }
    trailReverse(direction){
        switch(direction){
            case 'esquerda' : return 'direita';
            case 'cima' : return 'baixo';
            case 'direita' : return 'esquerda';
            case 'baixo' : return 'cima';
        }
    }
    makeTrace(tail,direction){
        let trace = document.createElement("div")
        trace.classList.add("trace-"+direction)
        tail.appendChild(trace)
    }
    createTrace(tail){
       let directions = ['esquerda','direita','cima','baixo'] 
       directions.forEach((direction)=>{
           if(tail?.classList.contains('trail-'+direction)){
               this.makeTrace(tail,direction)
           } 
       })
    }
    refreshTraces(){
        let tileWithTraces = document.querySelectorAll(".tile")
        tileWithTraces.forEach((tail) => {
           tail.innerHTML = ""
           this.createTrace(tail)
        })
    }
    async won(){
        setTimeout( proximaFase, 1000);
    }
}            






