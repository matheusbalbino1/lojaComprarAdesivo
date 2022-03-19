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
    }
}

elementosHtml.react.botaoMais.addEventListener("click", ()=>{somarDiminuir("react", "+")})
elementosHtml.react.botaoMenos.addEventListener("click", ()=>{somarDiminuir("react", "-")})

elementosHtml.angular.botaoMais.addEventListener("click", ()=>{somarDiminuir("angular", "+")})
elementosHtml.angular.botaoMenos.addEventListener("click", ()=>{somarDiminuir("angular", "-")})

elementosHtml.vue.botaoMais.addEventListener("click", ()=>{somarDiminuir("vue", "+")})
elementosHtml.vue.botaoMenos.addEventListener("click", ()=>{somarDiminuir("vue", "-")})

document.getElementsByClassName("botaoEnviar")[0]. addEventListener("click",()=>{
    event.preventDefault();
    window.location.href = "./indexAssets/pagamentos.html";
})

function total (){
    let total = document.getElementsByClassName("inputTotal")[0];
    let react = elementosHtml.react.input.value;
    let vue = elementosHtml.vue.input.value;
    let angular = elementosHtml.angular.input.value;
    total.value = (eval(parseInt(react)*9) + (parseInt(vue)*6) + (parseInt(angular)*5.55));
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