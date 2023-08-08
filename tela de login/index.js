function login() {
    const usuarioInput = document.getElementById("usuario").value;
    const senhaInput = document.getElementById("senha").value;

    if (usuarioInput === "" || senhaInput === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Login feito com sucesso !"); // Placeholder for further implementation
    }
}

