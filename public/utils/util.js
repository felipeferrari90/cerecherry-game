class Util{
    static getReverso(listaCoordenadas, max = { width: null, height: null}){
        let listaNumerosAltura = [];
        let listaNumerosComprimento = [];
        let maiorAltura = max.height || Math.max(...listaNumerosAltura);
        let maiorComprimento = max.width || Math.max(...listaNumerosComprimento);
        let listaCoordenadasReversa = [];
        listaCoordenadas.forEach((e)=>{
            listaNumerosAltura.push(+e.split("-")[0])
            listaNumerosComprimento.push(+e.split("-")[1])
        });
        
        for (let i = 1 ; i <= maiorAltura; i++) {
            for (let j = 1 ; j <= maiorComprimento; j++) {
                if(!(listaCoordenadas.includes(`${i}-${j}`))) listaCoordenadasReversa.push(`${i}-${j}`);
            }  
        }
        return listaCoordenadasReversa
    }
}

