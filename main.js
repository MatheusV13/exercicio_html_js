document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        var campoA = parseFloat(document.getElementById('campoA').value);
        var campoB = parseFloat(document.getElementById('campoB').value);
        
        var mensagem = document.getElementById('mensagem');

        if (campoB > campoA) {
            mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
            mensagem.style.color = "green";
        } else {
            mensagem.textContent = "Formulário inválido. Campo B deve ser maior que Campo A.";
            mensagem.style.color = "red";
        }
    });
});
