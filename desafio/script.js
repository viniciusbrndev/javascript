function suaidade(){
    var ano = document.querySelector('#iano').value
    var data = new Date().getFullYear()
    var idade = data - ano
    var divres = document.querySelector('div#res')
    var img = document.querySelector('#eimg')
    var sexo = document.querySelector('select#isexo').value

    // Verifica se o ano é válido
    if (ano == "" || ano > data || ano < 1900) {
        window.alert("Por favor, insira um ano válido!")
        return
    }
    
    // parte do gênero
    
    if (sexo == "men"){
        img.src = ("imgs/img01.jpg")
        divres.innerHTML = `Você é homem, e sua idade é ${idade} anos!`
    }
    else if(sexo == "wom"){
        img.src = ("imgs/img02.jpg")
        divres.innerHTML = `Você é uma mulher, e sua idade é ${idade} anos!`
    }
    else{
        img.src = ("imgs/img03.png")
        divres.innerHTML = `Você é gambiarra, e sua idade é ${idade} anos!`
    }
}
