class Ponto{
     static coordenadaStringParaObjeto(stringCoordenada){
          let arrayString = stringCoordenada.split("-");
          if(arrayString.length == 2){
              return {  x: +arrayString[0] , y: +arrayString[1] , string : stringCoordenada }      
          } else if(arrayString.length == 3){
              let direcao = arrayString.pop();
              return {  x: +arrayString[0] , y: +arrayString[1] , direcao: direcao , string : arrayString.splice(0,2).join("-") }   
          }
     }
     static isNulo(elementoHTML){
          return elementoHTML.classList.contains("nully") ? true : false ;
     }
     static isTileOuCano(elementoHTML){
          if(!elementoHTML) return null;
          return elementoHTML.classList.contains("tile") || Canos.ehCano(elementoHTML) ? true : null ;
     }
}