class Direcoes{ 
    static DIREITA = "direita";
    static ESQUERDA = "esquerda";
    static CIMA = "cima";
    static BAIXO = "baixo";
    static ALL = () => [Direcoes.ESQUERDA, Direcoes.DIREITA, Direcoes.CIMA, Direcoes.BAIXO];

    static getDirecaoOposta(direcao){
         switch(direcao){
            case Direcoes.DIREITA : return Direcoes.ESQUERDA; break;
            case Direcoes.ESQUERDA : return Direcoes.DIREITA; break;         
            case Direcoes.CIMA: return Direcoes.BAIXO; break;
            case Direcoes.BAIXO: return Direcoes.CIMA;  break;        
         } 
    }
    static girarSentidoHorario(direcao,vezes = 1){
        for(let i = 0; i < vezes; i++){
            switch(direcao){
                case Direcoes.DIREITA : direcao = Direcoes.BAIXO; break;
                case Direcoes.ESQUERDA : direcao =  Direcoes.CIMA; break;         
                case Direcoes.CIMA: direcao = Direcoes.DIREITA; break;
                case Direcoes.BAIXO: direcao = Direcoes.ESQUERDA;  break;        
            } 
        }
        return direcao
    }
    static girarSentidoAntiHorario(direcao,vezes = 1){
        for(let i = 0; i < vezes; i++){
            switch(direcao){
                case Direcoes.DIREITA : direcao = Direcoes.CIMA; break;
                case Direcoes.ESQUERDA : direcao =  Direcoes.BAIXO; break;         
                case Direcoes.CIMA: direcao = Direcoes.ESQUERDA; break;
                case Direcoes.BAIXO: direcao = Direcoes.DIREITA;  break;        
            } 
        }
        return direcao
    }
    static getCoordenadaXYporDirecao({x,y,direcao,vezes = 1}){
        let aux = {x,y}
        switch(direcao){
            case Direcoes.DIREITA :aux.x = x; aux.y = y+vezes; break;
            case Direcoes.ESQUERDA : aux.x = x; aux.y = y-vezes; break;         
            case Direcoes.CIMA: aux.x = x-vezes; aux.y = y; break;
            case Direcoes.BAIXO: aux.x = x+vezes; aux.y = y;  break;       
        } 
        return aux;
    }
    static setGravidade(direcao){
        //implementar isso ao fazer o world 5
    }
}