// Formulário de contato — envio simulado sem recarregar a página.
// O backend real (envio por e-mail) será integrado em uma etapa futura.

const form = document.getElementById("form-contato");
const aviso = document.getElementById("form-ok");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    aviso.textContent =
        "> mensagem enviada com sucesso, " + nome + "! " +
        "Retornaremos em breve para " + email + ".";

    aviso.classList.add("visivel");
    form.reset();
});
