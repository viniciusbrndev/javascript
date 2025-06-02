function listadeTarefas(){
    let inputTxt = document.querySelector("#itxt").value
    let list = document.querySelector("#lista")

    if(inputTxt.trim() === ""){
        window.alert("Sua tarefa está vazia, insira uma tarefa.")
        document.querySelector("#itxt").focus()
        
    } else{
    adicionarLi()    
    }

    function adicionarLi(){
        let newTask = document.createElement("li")
        newTask.textContent = inputTxt
        list.appendChild(newTask)
        inputTxt.focus()
        inputTxt.value = ""
        
    }

}