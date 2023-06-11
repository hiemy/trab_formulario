function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

    function handleFormSubmit(event) {
    event.preventDefault();

    try {
        var nome = document.getElementById("nome").value;
        var id = document.getElementById("id").value;

        if (!nome || !id) {
            throw new Error("Nome e ID são campos obrigatórios.");
        }

        setCookie("nomeFormulario", nome, 7);
        setCookie("idFormulario", id, 7);

        document.getElementById("cadastroForm").reset();

        alert("Cadastro realizado com sucesso!");
    } catch (error) {
        alert("Erro: " + error.message);
    }
}

document.getElementById("cadastroForm").addEventListener("submit", handleFormSubmit);