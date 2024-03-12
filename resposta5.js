const tela = document.querySelector(".mostrar")
const info = document.querySelector(".reverso")


let inverterString = (recebaString) => {
    let bol = false
    const stringReversa = []
    const arrayString = recebaString.split('')
    while(bol == false){
        const reverter = arrayString.splice(-1, 1)
        stringReversa.push(reverter)
        arrayString.length == 0 ? bol = true : bol = false
    }
    // console.log(stringReversa)
    console.log(stringReversa.join(""))
    tela.innerHTML = "A palavra que você escreveu foi: " + recebaString
    info.innerHTML += "A palavra invertida é: <strong>" + stringReversa.join("") + "</strong>"


}
inverterString(window.prompt("Escreva alguma coisa"))