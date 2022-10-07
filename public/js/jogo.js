class Game{
    iniciar(){
        
        // Tela.trocar(Tela.TELA_INICIO); descomentar quando tela de inicio tiver pronta
        Banco.sincronizar();
        if(Banco.getTelaAtual() == "inicio") Tela.trocar(Tela.TELA_FASE) //tirar apos implementacao da tela de inicio
       
    }
    resetarProgresso(){
        //implementar depois
    }
    configs(){
        //implementar depois
    }
}