let elementos = {
    botaoCep: document.getElementById("botaoCep"),
    inputCep: document.getElementById("inputCep"),
    botaoImprimir: document.getElementById("botaoImprimir"),
    botaoFinalizar: document.getElementById("botaoFinalizar")
}

elementos.botaoCep.addEventListener("click", conferirCep)

elementos.botaoImprimir.addEventListener("click", pararEvento)

elementos.botaoFinalizar.addEventListener("click", finalizar)

function conferirCep(){

    let valorInput = elementos.inputCep.value;

    if(valorInput.length !== 8 ){
        elementos.inputCep.value = ""
        alert("CEP Incorreto")
        return
    }

    valorInput = valorInput.substr(0, 5) + "-" + valorInput.substr(5, 7)
    elementos.inputCep.value = valorInput;

}

function pararEvento(){
    event.preventDefault()
    return
}

function finalizar(){
    event.preventDefault()
    alert("Pedido finalizado, até a próxima! ☺️")
    return
}


