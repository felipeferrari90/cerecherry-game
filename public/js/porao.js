class Porao{
    constructor(listaStringFim){
       listaStringFim.forEach((string) => {
           let elementoPonto = document.getElementById("tile-"+string)
           elementoPonto?.classList.add("saida-closed");
       }) 
    }

    static abrirPortas(){
        let HTMLPortasFechadas = document.getElementsByClassName("saida-closed") || [];
        [...HTMLPortasFechadas].forEach((porta)=>{
            porta.classList.remove("saida-closed");
            porta.classList.add("saida-open");
        })
    }
    
}