class Carro{
    velocidade = 0
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

class CarroQuebrado extends Carro{
    andar(){
    console.log("Carro Quebrado")
    }
    
}

let carro = new Carro()
let carro2 = Object.create(carro)
let carro3 = Object.create(carro2)

console.log(typeof carro)
console.log(typeof carro2)
carro3.andar = function(){
    console.log("carro quebrado")
}
carro3.andar()
console.log(carro.velocidade)
console.log(carro3.velocidade)


