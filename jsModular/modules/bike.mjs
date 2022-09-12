class Bike{
    velocidade = 0
    andar (){
        if(this.velocidade > 0 ) console.log("Bike em movimento")
        this.velocidade = "velocidade " + 5;
    }
}

export {Bike};