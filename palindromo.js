function verificarPalindromo(){
    //pega a palavra no input
    let input = document.querySelector("#ipal").value
    //formata a palavra
    let palavra = input.toLowerCase().replace(/\s/g, "")
    //inverte a string
    let invertida = palavra.split("").reverse().join("")
    let res = document.querySelector('div#res')
    
    if(invertida === palavra){
        res.innerHTML =`"${input}" é um palíndromo!`
    }else{
        res.innerHTML =`"${input}" não é um palíndromo!`
    }
}