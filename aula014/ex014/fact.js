
function fatorial() {
    let value = parseInt(document.getElementById("value").value)
    let res = document.getElementById("res")
    let f = parseInt(document.getElementById("value").value) - 1
    if(value <= 0 || value == ""){
        window.alert("Seu número não é válido ou o campo está vazio")
    }
    else{
        let resultado = 1;
    for (let i = value; i >= 1; i--) {
        resultado *= i; // Multiplica resultado por i (ex: 5! = 5 * 4 * 3 * 2 * 1)
    }
    }
    // Exibe o resultado
    res.innerHTML = `Fatorial de ${value} = ${resultado}`;
}
