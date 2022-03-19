alert("Para melhor funcionamento utiliza o navegador Google Chrome")
let elementosHtml = {
    react:{
        botaoMais: document.getElementsByClassName("botaoMais")[0],
        botaoMenos: document.getElementsByClassName("botaoMenos")[0],
        input: document.getElementById("reactInput")
    },
    vue:{
        botaoMais: document.getElementsByClassName("botaoMais")[1],
        botaoMenos: document.getElementsByClassName("botaoMenos")[1],
        input: document.getElementById("vueInput")
    },
    angular:{
        botaoMais: document.getElementsByClassName("botaoMais")[2],
        botaoMenos: document.getElementsByClassName("botaoMenos")[2],
        input: document.getElementById("angularInput")
    },
    mains:{
        mainPrincipal: document.getElementsByClassName("main")[0],
        mainSecundario: document.getElementsByClassName("pag2main")[0]
    },
    inputs:{
        valorTotal: document.getElementById("valorTotal"),
        estado: document.getElementsByClassName("input")[0],
        cidade: document.getElementsByClassName("input")[1],
        cep: document.getElementsByClassName("input")[2],
        endereco: document.getElementsByClassName("input")[3],
        numero: document.getElementsByClassName("input")[4],
        email: document.getElementsByClassName("input")[5]
    },
    botaoCep: document.getElementById("botaoCep"),
    botaoImprimir: document.getElementById("botaoImprimir"),
    botaoFinalizar: document.getElementById("botaoFinalizar")

}


elementosHtml.botaoCep.addEventListener("click", pararEvento)

elementosHtml.botaoImprimir.addEventListener("click", pararEvento)

elementosHtml.botaoFinalizar.addEventListener("click", finalizar)

elementosHtml.react.botaoMais.addEventListener("click", ()=>{somarDiminuir("react", "+")})
elementosHtml.react.botaoMenos.addEventListener("click", ()=>{somarDiminuir("react", "-")})

elementosHtml.angular.botaoMais.addEventListener("click", ()=>{somarDiminuir("angular", "+")})
elementosHtml.angular.botaoMenos.addEventListener("click", ()=>{somarDiminuir("angular", "-")})

elementosHtml.vue.botaoMais.addEventListener("click", ()=>{somarDiminuir("vue", "+")})
elementosHtml.vue.botaoMenos.addEventListener("click", ()=>{somarDiminuir("vue", "-")})

document.getElementsByClassName("botaoEnviar")[0]. addEventListener("click",()=>{
    event.preventDefault();
    elementosHtml.mains.mainPrincipal.classList.add("esconder");
    elementosHtml.mains.mainSecundario.classList.remove("esconder")

})

function total (){
    let total = document.getElementsByClassName("inputTotal")[0];
    let react = elementosHtml.react.input.value;
    let vue = elementosHtml.vue.input.value;
    let angular = elementosHtml.angular.input.value;
    total.value = (eval(parseInt(react)*9) + (parseInt(vue)*6) + (parseInt(angular)*5.55));
    elementosHtml.inputs.valorTotal.value = total.value;
    return
}
function somarDiminuir(parametro, parametro2){
    console.log("teste")
    let atual = document.getElementById(parametro + "Input");
    if(parametro2 == "-" && atual.value==0){
        return
    }
    atual.value = eval(parseInt(atual.value) + parametro2 + 1)
    total()
    return 
}

function pararEvento(){
    event.preventDefault()
    return
}

function finalizar(){
    event.preventDefault()
    sendEmail()
    return
}


    function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "testeempresa972@gmail.com",
        Password: "Empresateste972",
        To: elementosHtml.inputs.email.value,
        From: "testeempresa972@gmail.com",
        Subject: "Testando enviar emails JavaScript",
        Body: `<h1>Pedido:</h1><div>Pacotes de React:${elementosHtml.react.input.value}</div><div>Pacotes de Vue:${elementosHtml.vue.input.value}</div><div>Pacotes de Angular:${elementosHtml.angular.input.value}</div><h2>Endereço:</h2><div>Estado:${elementosHtml.inputs.estado.value}</div><div>Cidade:${elementosHtml.inputs.cidade.value}</div><div>CEP:${elementosHtml.inputs.cep.value}</div><div>Endereço:${elementosHtml.inputs.endereco.value},${elementosHtml.inputs.numero.value}</div><h2>Valor total R$ ${elementosHtml.inputs.valorTotal.value}`,
      })
        .then(function (message) {
            alert("Pedido finalizado, informações do pedido enviado ao seu email! ☺️")
        });
    }
