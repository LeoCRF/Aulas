function calculadora(a, b, operacao) {
    if (operacao === 'soma') {
        return a + b;
    } else if (operacao === 'subtracao') {
        return a - b;
    } else if (operacao === 'multiplicacao') {
        return a * b;
    } else if (operacao === 'divisao') {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Divisão por zero não é permitida';
        }
    } else {
        return 'Operação inválida';
    }
}

function calcular() {
    const a = parseFloat(document.getElementById('numero1').value);
    const b = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = calculadora(a, b, operacao);
    
    console.log('Número 1:', a);
    console.log('Número 2:', b);
    console.log('Operação:', operacao);
    console.log('Resultado:', resultado);
    
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
