class Inicio{
    constructor(listaStringInicios){
       listaStringInicios.forEach((string, index) => {  
           let inicioXY = string.split("-").slice(0,2).join("-")
           let direcao = string.split("-").pop();  
           let elementoPonto = document.getElementById("tile-"+inicioXY )
           let elementoDivInicio = document.createElement("div")
           elementoDivInicio.classList.add("inicio")
           elementoDivInicio.classList.add("inicio-"+direcao )
           elementoPonto?.appendChild(elementoDivInicio)
           elementoPonto?.addEventListener("click",this.setPontoAtualDeInicio,true) 
           index == 0 ? elementoPonto?.classList.add("current") : false
       });
    }
    setPontoAtualDeInicio(e){   
        if(!Personagem.primeiroMovimentoDaFase){
            let HTMLPontoAtual = document.getElementsByClassName("current")[0];
            HTMLPontoAtual?.classList.remove("current")
            let pontosDeInicio = document.getElementsByClassName("inicio") || [];
            [...pontosDeInicio].forEach((elemento)=>{ elemento?.classList.remove("current") })
            let elementoDoEvento = e.target.classList.contains("inicio") ? e.target.parentNode : e.target
            elementoDoEvento.classList.add("current");
        }
    }
    static limpar(direcao){
        let HTMLInicios = document.getElementsByClassName("inicio") || [];
        console.log("LIMPAR INICIOS: ", HTMLInicios);
        [...HTMLInicios].forEach((HTMLinicio)=>{
            let PontoPai = HTMLinicio.parentNode
            console.log("COMECO DO FOREACH INICIO", PontoPai)
            PontoPai?.removeChild(HTMLinicio);
            PontoPai.outerHTML = PontoPai.outerHTML //remover todos os listeners
            console.log("FIM DO FOREACH INICIO", PontoPai)
        })
    }
}