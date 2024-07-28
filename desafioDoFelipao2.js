function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (vitorias >= 101) {
        nivel = "Imortal";
    } else if (vitorias >= 91) {
        nivel = "Lendário";
    } else if (vitorias >= 81) {
        nivel = "Diamante";
    } else if (vitorias >= 51) {
        nivel = "Ouro";
    } else if (vitorias >= 21) {
        nivel = "Prata";
    } else if (vitorias >= 11) {
        nivel = "Bronze";
    } else if (vitorias < 10) {
        nivel = "Ferro";
    }
    
    // Exibe a mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplos de uso
calcularNivel(25, 5); // Exemplo de saldo positivo
calcularNivel(10, 15); // Exemplo de saldo negativo
calcularNivel(100, 100); // Exemplo onde vitórias são iguais a derrotas
