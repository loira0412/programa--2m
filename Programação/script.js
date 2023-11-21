function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}


function calcularPorcentagem() {
    //Obtenha o valor atual da calculadora

    var valorAtual= parseFloat(document.getElementById('display').value);

    // Calcule a porcentagem (por exemplo,20%)

    var resultado = valorAtual * 100;
    // Atualize o valor exibido na calculadora

    document.getElementById('display').value = resultado;
}