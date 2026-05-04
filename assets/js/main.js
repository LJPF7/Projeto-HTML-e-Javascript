function mostrarTexto() {
    // Mostrar o texto quando o cursor do rato deixa a imagem Lista de Tarefas do Main -->
    let mensagem = document.getElementById("mensagem-sobre-imagem")
    mensagem.innerText = "Regista-te para adicionar\ntarefas ou acede tua sessão\npara gerir tuas tarefas"
    mensagem.classList.remove("d-none")
}


function esconderTexto() {
    // Esconder o texto quando o cursor do rato deixa a imagem Lista de Tarefas do Main -->
    let mensagem = document.getElementById("mensagem-sobre-imagem")
    mensagem.innerText = ""
    mensagem.classList.add("d-none")
}

function obterAno() {
    // Obtem o ano inserido em Histórico de tarefas
    const ano = document.getElementById("input-ano").value
    document.getElementById("ano-tabs").innerText = "Ano: " + ano
}


// Início script que invoca o Toast do Bootstrap -->
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
// Fim script que invoca o Toast do Bootstrap -->


function mostrarToast() {
    // Mostra o Toast
    const toast = document.getElementById("liveToast");
    toast.className = "show";

    // Esconde o toast após 3 segundos
    setTimeout(function () {
        toast.className = toast.className.replace("show", "hidden");
    }, 3000);
}



// Início script que faz a validação do formulário novo utilizador em Javascript
const form = document.querySelector("#meu-formulario-novo-utilizador");

form.addEventListener("submit", (event) => {
    const utilizador = document.querySelector("#form-utilizador");
    const email = document.querySelector("#form-email2");
    const password = document.querySelector("#form-password2");
    const confirma_password = document.querySelector("#form-confirma-password");
    const msgErro = document.querySelector("#mensagem-erro");

    if (utilizador.value === "" || email.value === "" || password.value === "" || confirma_password.value === "") {
        event.preventDefault(); // Impede o envio
        msgErro.textContent = "É preciso preencher todos os campos.";
        msgErro.style.display = "block";
    } else {
        msgErro.style.display = "none";
        mostrarToast();
    }
});
// Fim script que faz a validação de formulário em Javascript


function validarFormulario() {
    // faz a validação do formulário nova tarefa em Javascript
    const form1 = document.querySelector("#meu-formulario-nova-tarefa");
    form1.addEventListener("submit", (event) => {
        const dia = document.querySelector("#form-dia");
        const mes = document.querySelector("#form-mes");
        const ano = document.querySelector("#form-ano");
        const hora = document.querySelector("#form-hora");
        const minuto = document.querySelector("#form-minuto");
        const tarefa = document.querySelector("#form-tarefa");
        const msgErro1 = document.querySelector("#mensagem-erro1")

        if (dia.value === "" || mes.value === "" || ano.value === "" || hora.value === "" || minuto.value == "" || tarefa.value == "") {
            event.preventDefault(); // Impede o envio
            msgErro1.textContent = "É preciso preencher todos os campos.";
            msgErro1.style.display = "block";
        } else {
            msgErro1.style.display = "none";
            //mostrarToast();
        }
    });
}