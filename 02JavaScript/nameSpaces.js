//NOTACAO DE OBJETOS

let objeto1 = {
    "funcao1" : function(){
        console.log("funcao1")
    }
}
let objeto2 = {
    "funcao1" : function(){
        console.log("nova funcao1")
    }
}

objeto1.funcao1();
objeto2.funcao1();


//IIFE
(function(){
    function funcao1() {
        console.log("funcao1");
    }
    funcao1();
}())


(function(){
    function funcao1() {
        console.log("nova funcao1");
   }
   funcao1();
}())


//letconst
{
    let funcao1 = function(){
        console.log("funcao-1")
    }
    funcao1();
}

{
    let funcao1 = function(){
        console.log("nvoa funcao-1")
    }
    funcao1();
}