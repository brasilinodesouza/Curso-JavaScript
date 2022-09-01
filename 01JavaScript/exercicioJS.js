

function validar(){

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cargo = document.getElementById("cargo");
    var mensagem = document.getElementById("mensagem");
    
    if(nome.value == "")
    {
        alert("O campo nome não pode estar vazio"); 
        return false;
    }
    else if(nome.value.length < 3 )
    {
        alert("O campo nome tem que conter mais que 3 caracteres"); 
        return false;
    }
    else if(email.value == "")
    {
        alert("O campo email não pode estar vazio"); 
        return false;
    }
    else if(email.value.indexOf("@") == -1 )
    {
        alert("O campo email tem que ter @"); 
        return false;
    }
    else if(email.value.indexOf(".") == -1 )
    {
        alert("O campo email tem que ter .com"); 
        return false;
    }
    else if(cargo == "cargo"){
        alert("Escolha um cargo válido"); 
        return false;
    }
    else if(mensagem.value.length < 20 )
    {
        alert("O campo mensagem tem que conter mais que 20 caracteres"); 
        return false;
    }


}
