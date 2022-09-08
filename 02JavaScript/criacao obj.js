class Carro{
    velocidade = 0
    ligado = false
    nivelCombustivel = 100
    cor;

    constructor(cor){
        console.log("carro criado")
        this.cor = cor
    }

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


let carro1 = new Carro("vermelho")
carro1.andar()
console.log(carro1.ligado)
console.log(carro1.velocidade)
console.log(carro1.cor)

console.log("--------------------------------")

let carro2 = new Carro("azul")
console.log(carro2.ligado)
console.log(carro2.velocidade)
console.log(carro2.cor)

