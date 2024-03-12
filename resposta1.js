let soma = 0
let k = 0
let calculo = (indice) => {
    while(k < indice){
        k++
        soma += k
    }
    console.log(soma)
}

calculo(13)

// Resposta 91