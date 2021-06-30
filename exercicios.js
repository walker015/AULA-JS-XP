// Exercícios de JS

//Exemplo 04

const valorBicicleta = 300 * 100 / 60

console.log('EX04: Para lucrar 25% a bicicleta precisa valer R$ ', valorBicicleta * 0.25 + valorBicicleta)

//Exemplo 06

const valorDesconto = 3000 - 3000 * 0.25

console.log("EX06: O notebook de R$ 3000,00 com desconto de 25% fica por R$ " + valorDesconto);

//Exemplo 08

const valorSemaforo = "red"

if (valorSemaforo === "green") {
    console.log("EX08: Siga!");
} else if (valorSemaforo === "yellow") {
    console.log("EX08: Atenção!");
} else if (valorSemaforo === "red") {
    console.log("EX08: Pare!");
} else {
    console.log("EX08: Entre com uma cor válida.");
}

//Exemplo 10

const dia = "quarta"

if (dia === "segunda" || dia === "terça" || dia === "quarta" || dia === "quinta" || dia === "sexta") {
    console.log("EX10: " + dia + " é dia de aula");
} else {
    console.log("EX10: " + dia + " não é dia de aula");
}

//Exemplo 16

const numero = 3
let fatorial = 1

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`EX16: A fatorial de ${numero} é ${fatorial}`);

//Exemplo 19

const conversor = (cotacao, valor) => {return valor / cotacao}

const cotacaoDoDia = 5, dinheiro = 10

console.log(`EX19: R$ ${dinheiro} em dólares vale U$ ${conversor(cotacaoDoDia, dinheiro)}`);

//Exemplo 20

for (let i = 1; i <= 50 ; i++) {
    if (i === 10) {
        continue
    } else if (i === 25) {
        break
    } else {
        console.log(`EX20: ${i}`);
    }
}

//Exemplo 21

for (let i = 20; i <= 100; i += 10) {
    if (i === 60 || i === 90) {
        console.log(`EX21: CONTINUE`);
        continue
    } else {
        console.log(`EX21: ${i}`);
    }
}
