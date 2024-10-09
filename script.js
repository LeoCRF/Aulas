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

function calcular(operacao) {
    const a = 10; // Número fixo
    const b = 5;  // Número fixo
    const resultado = calculadora(a, b, operacao);
    console.log('Resultado:', resultado);
}
