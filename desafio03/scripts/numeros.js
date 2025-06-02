//Adiciona os números no array
let numeros = []
function adicionarNumeros(){
    let input = document.querySelector("#number");
    let value = parseInt(input.value);
if(isNaN(value) || value > 100 || value < 1 ){
    window.alert("Seu número não é válido, ou é maior que 100")
    input.value = ""
    input.focus()
    return
} else if(numeros.includes(value)){
    window.alert("Esse número já foi adicionado")
    input.value = ""
    input.focus()
    return
} else{
    numeros.push(value)
    input.value = ""
    input.focus()
    atualizarSelect()
    atualizarResumo()
}
}

//Adiciona os números no select
function atualizarSelect(){
    let ultimoNumero = numeros[numeros.length - 1]
    let novaOption = document.createElement("option")
    let select = document.querySelector("select#target")
    

    novaOption.value = ultimoNumero
    novaOption.textContent = `Número adicionado ${ultimoNumero}`

    select.appendChild(novaOption)

}

//Atualiza o resumo
function atualizarResumo(){
    let resumo = document.querySelector("div#res")
    
    let quantidade = numeros.length
    let soma = 0
    //soma os números usando forEach
    numeros.forEach(num => {soma += num})
    //Média dos números
    let media = soma / quantidade

    //atualiza o html
    document.getElementById("quantidade").textContent = quantidade

    document.getElementById("soma").textContent = soma

    document.getElementById("media").textContent = media.toFixed(2)

}