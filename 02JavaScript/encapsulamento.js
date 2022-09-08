function Carro(){
    var variavelSecreta = "segredo"
    var metodoInterno = function(){
        console.log("so pode ser acessado dentro do objeto")
    }

    this.velocidade = 0;
    this.ligado = false;
    this.nivelCombustivel = 100;
    this.ligar = function(){
        if(this.ligado){
            console.log("Carro ja esta ligado")
        }else{
            this.ligado = true
        }
    }

    this.andar = function (){
        console.log(variavelSecreta)
        metodoInterno();
        if (!this.ligado){
            this.ligar()
        }
        this.velocidade = "velocidade " +40;
    }
}

let carro = new Carro()
carro.andar()