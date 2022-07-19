
export default class Fase{
    static CarrosselDeFases = [];
    faseNumber;
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
        espada : 0
    }
    eleMoveu = false
    constructor(tilesWidth, tilesHeight  ){
        this.tilesWidth = tilesWidth || 6,
        this.tilesHeight = tilesHeight || 6
        
    }
    renderFase(){
       this.DOMcontainerFase.style.gridTemplateColumns = `repeat(${this.tilesWidth },min-content)`
       for (let tileY = 1; tileY < this.tilesHeight + 1; tileY++) {
            for (let tileX = 1; tileX < this.tilesWidth + 1; tileX++) {
                let tileDom = document.createElement("div")
                tileDom.classList.add("tile")
                tileDom.id = "tile-"+tileY+"-"+tileX
                this.DOMcontainerFase.appendChild(tileDom)
                this.verifyNull(tileX,tileY)
            }
       }
       this.applicateZoom()
       this.tilesWall.forEach((coord) => {
           let tile = document.getElementById('tile-'+coord)
           tile?.classList.add('wall')
       })
       this.renderCherrys();
       this.tilesSword.forEach((coord) => {
          let directionSword = coord.split("-").pop()
          let coordSword = coord.split("-").slice(0,2).join("-") 
          let tile = document.getElementById('tile-'+coordSword)
          tile?.classList.remove('point')
          tile?.classList.add('espada-'+directionSword)
       })
       this.renderInits()
       this.tilesEnd.forEach((coord) => {
          let tile = document.getElementById('tile-'+coord)
          tile?.classList.add('saida-closed')
       })
       document.querySelectorAll(".tile").forEach(
           (elementDOM) => {  
               this.renderBordersFase(elementDOM)
       })
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
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-cima"):false
            
            aux = document.getElementById('tile-'+(y+1)+'-'+x) || null
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-baixo"):false

            aux = document.getElementById('tile-'+y+'-'+(x-1)) || null
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-esquerda"):false

            aux = document.getElementById('tile-'+y+'-'+(x+1)) || null
            aux == null || aux?.classList.contains("nully") ? elementCurrent.classList.add("border-direita"):false
        }
       
    }
    renderInits(){
        this.tilesStart.forEach((coord,index) => {
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
        this.currentTile = this.tilesStart[0]
    }
    addInitCurrent(e){
        let elementWithCurrent = this.tilesStart.find((e)=>{ e.classList.contains("current")})
        elementWithCurrent?.classList.remove("current")
        this.tilesStart.forEach((element)=>{ element.classList.remove("current")})
        let elementEvent = e.target.classList.contains("inicio") ? e.target.parentNode : e.target
        elementEvent.classList.add("current")
        this.currentTile = elementEvent
    }
    atualizarFase(){
       let classesList = [...this.currentTile.classList]
       if(classesList.some(e => /^cereja-/gmi.test(e))){    
          let cherryClass = classesList.find(e => /^cereja-/gmi.test(e))
          this.harvestCherry(cherryClass.split('-')[1])
          if(this.tilesCherry[this.tilesCherry.length - 1].length == 0){
             document.querySelectorAll(".saida-closed")?.forEach((tile)=>{
                tile.classList.add("saida-open")
             })
          }
       }
       if(this.currentTile.classList.contains("saida-open")){
          this.currentTile.classList.add("win")
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
        } else {
            this.currentTile.classList.add("current");
            tileFuture == null
        }
        if(this.currentTile.classList.contains('espada-'+direction)){
            this.getSword(direction); 
        } 
        if( this.currentTile.classList.contains("espada-cima") || 
            this.currentTile.classList.contains("espada-baixo") ||
            this.currentTile.classList.contains("espada-esquerda") ||
            this.currentTile.classList.contains("espada-direita") 
        ){
            if(this.currentTile.classList.contains('espada-'+direction)){
                this.getSword(direction)
            }else{
                this.items.espada == 0 ? this.morrer() : this.items.espada--    
            }
        } 
    }
    getSword(direction){
        if(this.eleMoveu){
            this.items.espada++
            this.currentTile.classList.remove("espada-"+direction)    
        }
    }
    harvestCherry(valueCherry){
        this.currentTile?.classList.remove("cereja-"+valueCherry)
        this.tilesCherry[valueCherry - 1].shift()
    }
    canMove(x,y,direction,tileFuture){
        this.eleMoveu = true
        if(direction == null || 
           tileFuture == null || 
           !(tileFuture?.classList.contains("tile")) ||
           tileFuture?.classList.contains("wall") ||
           tileFuture?.classList.contains("nully") ||
           tileFuture?.classList.contains("trail-"+this.trailReverse(direction))||
           this.currentTile.classList.contains("dead") ||
           this.currentTile.classList.contains("win") ||
           this.notGetCherry(tileFuture)
           ){
            this.eleMoveu = false  
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
}


