//alert("Para melhor funcionamento utiliza o navegador Google Chrome")

let elementosHtml = {
    react: {
        botaoMais: document.getElementById("botaoAumentarReact"),
        botaoMenos: document.getElementById("botaoDiminuirReact"),
        input: document.getElementById("inputReact")
    },
    vue: {
        botaoMais: document.getElementById("botaoAumentarVue"),
        botaoMenos: document.getElementById("botaoDiminuirVue"),
        input: document.getElementById("inputVue")
    },
    angular: {
        botaoMais: document.getElementById("botaoAumentarAngular"),
        botaoMenos: document.getElementById("botaoDiminuirAngular"),
        input: document.getElementById("inputAngular")
    },
    mains: {
        mainPrincipal: document.getElementsByClassName("landingMain")[0],
        mainSecundario: document.getElementsByClassName("comprarMain")[0],
        mainTerceario: document.getElementsByClassName("finalizarMain")[0]
    },
    inputs: {
        valorTotal: document.getElementById("valorTotal"),
        estado: document.getElementsByClassName("input")[0],
        cidade: document.getElementsByClassName("input")[1],
        cep: document.getElementsByClassName("input")[2],
        endereco: document.getElementsByClassName("input")[3],
        numero: document.getElementsByClassName("input")[4],
        email: document.getElementsByClassName("input")[5]
    },
    botaoImprimir: document.getElementById("botaoImprimir"),
    botaoFinalizar: document.getElementById("botaoFinalizar"),
    botaoLandingPage: document.getElementById("landingButton"),
    botaoProximo: document.getElementById("botaoProximo"),
    botaoVoltar: document.getElementById("botaoVoltar"),
    botaoVoltarLanding: document.getElementById("botaoVoltarLanding"),
    cartaoDeCredito: document.getElementsByClassName("inputRadio")[0],
    boleto: document.getElementsByClassName("inputRadio")[1]
}


elementosHtml.botaoImprimir.addEventListener("click", pararEvento)

elementosHtml.botaoFinalizar.addEventListener("click", finalizar)

elementosHtml.react.botaoMais.addEventListener("click", () => { somarDiminuir("React", "+") })
elementosHtml.react.botaoMenos.addEventListener("click", () => { somarDiminuir("React", "-") })

elementosHtml.angular.botaoMais.addEventListener("click", () => { somarDiminuir("Angular", "+") })
elementosHtml.angular.botaoMenos.addEventListener("click", () => { somarDiminuir("Angular", "-") })

elementosHtml.vue.botaoMais.addEventListener("click", () => { somarDiminuir("Vue", "+") })
elementosHtml.vue.botaoMenos.addEventListener("click", () => { somarDiminuir("Vue", "-") })

elementosHtml.botaoLandingPage.addEventListener("click", () => {
    event.preventDefault();
    elementosHtml.mains.mainPrincipal.classList.add("esconder");
    elementosHtml.mains.mainSecundario.classList.remove("esconder")
})

elementosHtml.botaoVoltarLanding.addEventListener("click", () => {
    event.preventDefault();
    elementosHtml.mains.mainSecundario.classList.add("esconder");
    elementosHtml.mains.mainPrincipal.classList.remove("esconder")
})
elementosHtml.botaoProximo.addEventListener("click", () => {
    event.preventDefault();
    elementosHtml.mains.mainSecundario.classList.add("esconder");
    elementosHtml.mains.mainTerceario.classList.remove("esconder")
})
elementosHtml.botaoVoltar.addEventListener("click", () => {
    event.preventDefault();
    elementosHtml.mains.mainTerceario.classList.add("esconder");
    elementosHtml.mains.mainSecundario.classList.remove("esconder")
})


function total() {
    let total = document.getElementsByClassName("inputTotal")[0];
    let react = elementosHtml.react.input.value;
    let vue = elementosHtml.vue.input.value;
    let angular = elementosHtml.angular.input.value;
    total.value = (eval(parseInt(react) * 9) + (parseInt(vue) * 8.50) + (parseInt(angular) * 6.20));
    elementosHtml.inputs.valorTotal.value = total.value;
    return
}
function somarDiminuir(parametro, parametro2) {
    console.log("teste")
    let atual = document.getElementById("input" + parametro);
    if (parametro2 == "-" && atual.value == 0) {
        return
    }
    atual.value = eval(parseInt(atual.value) + parametro2 + 1)
    total()
    return
}

function pararEvento() {
    event.preventDefault()
    return
}

function finalizar() {
    event.preventDefault()
    sendEmail()
    return
}
function metodoDePagamento() {
    if (elementosHtml.cartaoDeCredito.checked) {
        return "Cartão de Crédito"
    } else if (elementosHtml.boleto.checked) {
        return "Boleto"
    }
    return "Método de pagamento não escolhido"
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "testeempresa972@gmail.com",
        Password: "Empresateste972",
        To: elementosHtml.inputs.email.value,
        From: "testeempresa972@gmail.com",
        Subject: "Seu pedido de Pacotes de Adesivos",
        Body: `<h1>Pedido:</h1><div>Pacotes de React:${elementosHtml.react.input.value}</div><div>Pacotes de Vue:${elementosHtml.vue.input.value}</div><div>Pacotes de Angular:${elementosHtml.angular.input.value}</div><h2>Endereço:</h2><div>Estado:${elementosHtml.inputs.estado.value}</div><div>Cidade:${elementosHtml.inputs.cidade.value}</div><div>CEP:${elementosHtml.inputs.cep.value}</div><div>Endereço:${elementosHtml.inputs.endereco.value},${elementosHtml.inputs.numero.value}</div><h2>Valor total R$ ${elementosHtml.inputs.valorTotal.value}</h2><div>Método de pagamento: ${metodoDePagamento()}</div>`,
    })
        .then(function (message) {
            alert("Pedido finalizado, informações do pedido enviado ao seu email! ☺️")
        });
}
