//alert("Para melhor funcionamento utiliza o navegador Google Chrome")

let elementosHtml = {
    react: {
        botaoMais: pegarElementoId("botaoAumentarReact"),
        botaoMenos: pegarElementoId("botaoDiminuirReact"),
        input: pegarElementoId("inputReact")
    },
    vue: {
        botaoMais: pegarElementoId("botaoAumentarVue"),
        botaoMenos: pegarElementoId("botaoDiminuirVue"),
        input: pegarElementoId("inputVue")
    },
    angular: {
        botaoMais: pegarElementoId("botaoAumentarAngular"),
        botaoMenos: pegarElementoId("botaoDiminuirAngular"),
        input: pegarElementoId("inputAngular")
    },

    // Páginas do site
    mains: {
        mainPrincipal: pegarElementoClasse("landingMain")[0],
        mainSecundario: pegarElementoClasse("comprarMain")[0],
        mainTerceario: pegarElementoClasse("finalizarMain")[0]
    },

    // Inputs da Entrega
    inputs: {
        valorTotal: pegarElementoId("valorTotal"),
        estado: pegarElementoClasse("input")[0],
        cidade: pegarElementoClasse("input")[1],
        cep: pegarElementoClasse("input")[2],
        endereco: pegarElementoClasse("input")[3],
        numero: pegarElementoClasse("input")[4],
        email: pegarElementoClasse("input")[5]
    },
    botaoImprimir: pegarElementoId("botaoImprimir"),
    botaoFinalizar: pegarElementoId("botaoFinalizar"),
    botaoLandingPage: pegarElementoId("landingButton"),
    botaoProximo: pegarElementoId("botaoProximo"),
    botaoVoltar: pegarElementoId("botaoVoltar"),
    botaoVoltarLanding: pegarElementoId("botaoVoltarLanding"),
    cartaoDeCredito: pegarElementoClasse("inputRadio")[0],
    boleto: pegarElementoClasse("inputRadio")[1]
}

// botão Imprimir
elementosHtml.botaoImprimir.addEventListener("click", pararEvento)

// botão Finalizar
elementosHtml.botaoFinalizar.addEventListener("click", finalizar)

// botões de aumentar e diminuir REACT
elementosHtml.react.botaoMais.addEventListener("click", () => { somarDiminuir("React", "+") })
elementosHtml.react.botaoMenos.addEventListener("click", () => { somarDiminuir("React", "-") })

// botões de aumentar e diminuir ANGULAR
elementosHtml.angular.botaoMais.addEventListener("click", () => { somarDiminuir("Angular", "+") })
elementosHtml.angular.botaoMenos.addEventListener("click", () => { somarDiminuir("Angular", "-") })

// botões de aumentar e diminuir VUE
elementosHtml.vue.botaoMais.addEventListener("click", () => { somarDiminuir("Vue", "+") })
elementosHtml.vue.botaoMenos.addEventListener("click", () => { somarDiminuir("Vue", "-") })

// Ir da LandingPage para a página de compras
elementosHtml.botaoLandingPage.addEventListener("click", () => {
    event.preventDefault();
    alterarPagina("mainPrincipal", "mainSecundario")
})

// Voltar da página de compras para a LandingPage
elementosHtml.botaoVoltarLanding.addEventListener("click", () => {
    event.preventDefault();
    alterarPagina("mainSecundario", "mainPrincipal")
})

// Ir da página de compras para a página "Finalizar"
elementosHtml.botaoProximo.addEventListener("click", () => {
    event.preventDefault();
    alterarPagina("mainSecundario", "mainTerceario")

})

// Voltar da página "Finalizar" para a página de compras 
elementosHtml.botaoVoltar.addEventListener("click", () => {
    event.preventDefault();
    alterarPagina("mainTerceario", "mainSecundario")

})

// Mudar página
function alterarPagina(esconder, mostrar) {
    elementosHtml.mains[esconder].classList.add("esconder");
    elementosHtml.mains[mostrar].classList.remove("esconder");
}

function pegarElementoId(parametro) {
    return document.getElementById(parametro)
}
function pegarElementoClasse(parametro) {
    return document.getElementsByClassName(parametro)
}

// Mostrar o valor total nos Inputs
function total() {
    let total = pegarElementoClasse("inputTotal")[0];
    let react = elementosHtml.react.input.value;
    let vue = elementosHtml.vue.input.value;
    let angular = elementosHtml.angular.input.value;
    //Valor total para a página de compras
    total.value = (eval(parseInt(react) * 9) + (parseInt(vue) * 8.50) + (parseInt(angular) * 6.20));

    //Valor total para a página "finalizar"
    elementosHtml.inputs.valorTotal.value = total.value;
    return
}

// Mostrar a quantidade de itens selecionados
function somarDiminuir(parametro, parametro2) {
    console.log("teste")
    let atual = pegarElementoId("input" + parametro);
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

// Finalizar pedido e Enviar Email
function finalizar() {
    event.preventDefault()
    sendEmail()
    return
}

// Enviar ao email o metodo de pagamento escolhido
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
