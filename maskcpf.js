function maskCpf(cpf){
    if(cpf.length != 11){
            console.log("CPF inválido!")
    }else{
        const inicio = cpf.slice(0, 9)
        const maskedCpf = "*".repeat(9)

        const pt1 = maskedCpf.slice(0, 3)
        const pt2 = maskedCpf.slice(3, 6)
        const pt3 = maskedCpf.slice(6, 9)
        const final = cpf.slice(9)

        return `${pt1}.${pt2}.${pt3}-${final}`
    }
}
console.log(maskCpf("12345678912"))