document.getElementById("confirmar").addEventListener("click", function() {
    if (confirm("Tem certeza de que deseja confirmar sua presença?")) {
        alert("Confirmação realizada com sucesso!");
        window.location.href="formulario.html"
    } else {
        alert("Confirmação Cancelada.");
    }
});