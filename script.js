const botao = document.getElementById("botaoSortear");

botao.addEventListener("click", function () {
    const min = parseInt(document.getElementById("numeroMin").value);
    const max = parseInt(document.getElementById("numeroMax").value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, preencha os dois campos com números.");
        return;
    }

    if (min > max) {
        alert("O valor mínimo não pode ser maior que o máximo!");
        return;
    }

    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("Número sorteado: " + sorteado);
});