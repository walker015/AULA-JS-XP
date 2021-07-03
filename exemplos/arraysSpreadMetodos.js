const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

// Acessar informações no array
console.log(alunasGama[0]);

//Operador spread (...)

const alunasXp = [...alunasGama, "Simara"]
console.log(alunasXp);

// métodos de iteração

for (let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i]);
}
console.log("\n");

//find
alunasXp.map(aluna => console.log(aluna))

//filter

const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)

console.log(numerosImpares);

const numerosPares = numeros.filter(numero => numero % 2 === 0)

console.log(numerosPares);

//sort

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDescrecente = numeros.sort((a, b) => b - a)
console.log(numerosOrdenadosDescrecente);

//reduce - reduz nosso array a um resultado de uma operação matemática

const soma = numeros.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0)

console.log(soma);