function count(){
    //variáveis
    var start = parseInt(document.querySelector("#istart").value)
    var interval = parseInt(document.querySelector("#interb").value)
    var steps = parseInt(document.querySelector("#ipasso").value)
    
    var res = document.querySelector("#res")
    res.innerHTML = ""; // Limpa o resultado anterior
    


    //condições

    if (isNaN(start) || isNaN(interval) || isNaN(steps)) {
        window.alert("Verifique se todos os campos contêm números válidos.");
        return; // Sai da função se inválido
    }
    else{
        if (steps <= 0){
            window.alert("PASSO INVÁLIDO, 1 será atribuído como valor")
            steps = 1 
        }        
        }
        //contagem
        if (interval > start) {
            for(var current = start; current <=interval; current += steps){
                res.innerHTML += `${current} →`
            }}
        else{
            for(var current = start; current >= interval; current -= steps){
                res.innerHTML += `${current} →`
            }
        }
    }
    

    res.innerHTML = res.innerHTML.slice(0, -2)