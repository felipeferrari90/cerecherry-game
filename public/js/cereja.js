class Cereja{
    constructor(listaStringCoordenadasCerejas = []){
        listaStringCoordenadasCerejas.forEach((e)=>{
            let x = e.split("-")[0] 
            let y = e.split("-")[1] 
            let nivel = e.split("-")[2]
            let pontoHTML = document.getElementById(`tile-${x}-${y}`)
            pontoHTML?.classList.add("cereja")
            pontoHTML?.classList.add(`cereja-${nivel}`)
        })
    } 
    static possoPegar(elementoHTML,nivel){
        console.log("POSSO PEGAR CEREJA? antes", nivel, document.getElementsByClassName(`cereja-${nivel--}`).length )
        if(elementoHTML?.classList.contains("cereja")){
            if(document.getElementsByClassName(`cereja-${nivel--}`).length > 0){
                return null;
            } 
        }
        return true;
    }   
    static getQuantidade(){
        let totalDeCerejasDaFase = document.getElementsByClassName("cereja")
        return totalDeCerejasDaFase.length;
    } 
}