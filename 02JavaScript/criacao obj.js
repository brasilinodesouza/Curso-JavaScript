var carro = {} 
carro.velocidade = 0;
carro.ligado = false;
carro.qtdPortas = 4;
carro.ligar = function(){
    this.ligado = true;
}

var carro2 = {} 
carro2.velocidade = 0;
carro2.ligado = false;
carro2.qtdPortas = 4;
carro.ligar = function(){
    this.ligado = true;
}

carro.ligar()
console.log("Carro está ligado? " +carro.ligado)
console.log("Carro2 está ligado? " +carro2.ligado)
