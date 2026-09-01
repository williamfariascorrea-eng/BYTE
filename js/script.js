// Formulário de contato — envia a mensagem por e-mail via Web3Forms (sem backend).
// A "access key" vem da sua conta Web3Forms (gratuita). A mensagem chega no e-mail
// configurado lá, mesmo usando um e-mail de destino diferente do Gmail.

const ACCESS_KEY = "TROQUE-ME"; // ← substitua pela sua key do Web3Forms

const form = document.getElementById("form-contato");
const aviso = document.getElementById("form-ok");
const botao = form.querySelector('[type="submit"]');

form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Coleta os dados do formulário como objeto chave/valor
    const dados = Object.fromEntries(new FormData(form).entries());
    dados.access_key = ACCESS_KEY; // a key que autentica o envio

    // Estado "enviando" no botão, para o usuário saber que processou
    botao.disabled = true;
    botao.textContent = "Enviando...";

    try {
        const resposta = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(dados),
        });

        const json = await resposta.json();

        if (resposta.ok && json.success) {
            aviso.textContent = "> mensagem enviada com sucesso! Retornaremos em breve.";
            form.reset();
        } else {
            aviso.textContent = "> erro ao enviar. Tente novamente em instantes.";
        }
    } catch (erro) {
        aviso.textContent = "> sem conexão. Verifique sua internet e tente de novo.";
    }

    // Sempre restaura o botão ao final
    botao.disabled = false;
    botao.textContent = "Enviar mensagem";
    aviso.classList.add("visivel");
});