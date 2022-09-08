class Carro{
    velocidade = "velocidade " +0
    ligado = false
    nivelCombustivel = 100
    cor;

    ligar(){
        this.ligado = true;
    }

    andar(){
        if (!this.ligado){
            this.ligar()
        }
        this.velocidade = "velocidade " +40;
    }
}


class carroQuebrado extends Carro{
    andar(){
        console.log("Carro Quebrado")
    }
}

class carroCorrida extends Carro{
    andar(){
        if (!this.ligado){
            this.ligar()
        }
        this.velocidade = "velocidade " +120;
    }
}

class CarroComAR extends Carro{
    temperatura = 25
    ligarAr(){
        this.temperatura = 23
    }
    desligarAr(){
        this.temperatura = 30
    }
}

let carroRuim = new carroQuebrado()
let carroF1 = new carroCorrida()
let carroAr = new CarroComAR()

carroRuim.andar()
carroF1.andar()
carroAr.andar()

console.log(carroRuim.velocidade)    // velocidade 0 
console.log(carroF1.velocidade)      // velocidade 120
console.log(carroAr.velocidade)      // velocidade 40
