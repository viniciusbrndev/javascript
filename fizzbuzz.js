function fizzBuzzPersonalizado(inicio, fim){
    for(i = inicio; i <= fim; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
            return
        }else if(i % 3 === 0){
            console.log("Fizz")
            return
        }else if(i % 5 === 0){
            console.log("Buzz")
            return
        }else{
            console.log(i)
        }
    }
}
fizzBuzzPersonalizado(1, 20)