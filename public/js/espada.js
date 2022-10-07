class Espada{
    constructor(listaStringCoordenadasCerejas = []){
        listaStringCoordenadasCerejas.forEach((string)=>{
            let x = string.split("-")[0] 
            let y = string.split("-")[1] 
            let direcao = string.split("-")[2] 
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            pontoHTML.classList.add("espada")
            pontoHTML.classList.add(`espada-${direcao}`)
            pontoHTML.classList.add("cabo")
        })
    }
    static atualizar(){
        //WORLD 4
    }
}