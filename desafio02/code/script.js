function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")


    if(hora >= 0 && hora <= 12){
        //bom dia
        document.body.style.backgroundColor = "#E6C64D"
        img.src = "imagens/manha.jpg"
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
    }
    else if(hora >= 13 && hora < 18){
        //boa tarde
        document.body.style.backgroundColor = "#E6994C"
        img.src = "imagens/tarde.jpg"
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
    }
    else{
        //boa noite
        document.body.style.backgroundColor = "#3B2573"
        img.src = "imagens/noite.jpg"
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
    }
}