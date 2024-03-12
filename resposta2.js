//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const tela = document.querySelector(".mostrar-boleano")

let seqFibo = (numero) => {
    let fiboArray = [0,1]
    let numUm = 0
    let numDois = 1
    let iguais = false

    for(let i = 0;i < 10000;){
        // console.log(numUm, numDois)
        i = fiboArray[numUm] + fiboArray[numDois]
        fiboArray.push(i)
        numUm++
        numDois++
        // console.log(numUm, numDois)
        if (numero == i) {
            iguais = true
        }
        
    }
    
    iguais == false ? tela.innerHTML = numero + ": Não, esse número não está na sequencia fibonacci" : tela.innerHTML = numero + ": Sim, esse número está na sequencia fibonacci"
    iguais == false ? console.log("Não, esse número não está na sequencia fibonacci"):console.log("Sim, esse número está na sequencia fibonacci")
    

 }
 seqFibo(window.prompt("Insira um número, e veja se ele está sequencia de fibonacci!"))