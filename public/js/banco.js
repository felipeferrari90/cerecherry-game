class Banco{
    static getFaseAtual = () => +localStorage["level"] || 1;
    static getFasesPassadas = () => +localStorage["passedLevels"] || 0;
    static getMundosPassados = +localStorage["passedWorlds"] || 0;
    static getMundoAtual = () => +localStorage["world"] || 1;
    static getTelaAtual = () => localStorage["screen"] || "inicio" //trocar pra tela de inicio apos implementacao da mesma
    static getCorPersonagem = () => localStorage["corPersonagem"] || "transparent"
    static sincronizar(){
        
        localStorage["level"] = +this.getFaseAtual();
        localStorage["passedLevels"] = +this.getFasesPassadas();
        localStorage["world"] = +this.getMundoAtual();
        localStorage["screen"] = this.getTelaAtual();
        
        // TEMPORARIO PRA EVITAR BUG DO PRIMEIRO INICIO
        if(Banco.getTelaAtual() == Tela.TELA_INICIO){
            localStorage["screenChoice"] = "false";
            Tela.trocar(TELA_FASE)
        }
    }
    static setFaseAtual(fase){
        localStorage["level"] = fase;
    }
    static setFasesPassadas(fase){
        localStorage["passedLevels"] = fase;
    }

    static getMundosPassados(world){
        localStorage["passedWorlds"] = world;
    }
    static setMundoAtual(mundo){
        localStorage["world"] = mundo
    }
    static setTelaAtual(tela){
        localStorage["screen"] = tela
    }
    static setCorPersonagem(cor){
        localStorage["corPersonagem"] = cor
    }
}