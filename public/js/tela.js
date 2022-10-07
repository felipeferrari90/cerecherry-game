class Tela{
    static TELA_FASE = "fase";
    static TELA_MUNDO = "world";
    static TELA_INICIO = "inicio";
    static TELA_TODOS_MUNDOS = "allWorlds";

    telaAtual = () => Banco.getTelaAtual(); 

    static trocar(tela){
        if(tela == Tela.TELA_MUNDO) localStorage["screenChoice"] = "true";
        Banco.setTelaAtual(tela);
        this.recarregar();
    }
    static proximaFase(faseAtual,mundoAtual,proximoWorld = null){
        let faseSucessora = faseAtual + 1
        if(Banco.getFasesPassadas() < faseAtual){
           Banco.setFasesPassadas(Banco.getFasesPassadas() + 1)  
        }
        if(proximoWorld){
            Banco.setMundoAtual(mundoAtual);
            Banco.setFaseAtual(faseSucessora);
            // Tela.trocar(this.TELA_TODOS_MUNDOS) - descomentar depois da entrega do Diego
        } 
        this.carregarFase(faseSucessora);
    }

    static carregarFase(fase){
        localStorage["screenChoice"] = "false"
        Banco.setFaseAtual(fase)
        this.trocar(Tela.TELA_FASE);
    }
    static recarregar(){
        document.location.reload(false);
    }
}