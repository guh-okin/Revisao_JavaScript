// Exercício 1
function calcMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3 / 3);
}

const media = calcMedia(4, 8, 6);
console.log("Média:", media.toFixed(2));

if (media > 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Exercício 2
function verificarTipo(valor) {
    console.log("A variável é do tipo: " + typeof valor);
}

verificarTipo("Olá Mundo!");
verificarTipo(42);
verificarTipo(true);

// Exercício 3
const idade = 20;
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);

// Exercício 4
const numTabuada = 7;
for (let i = 0; i <= 10; i++) {
    console.log(numTabuada + "X" + i + "=" + numTabuada * i);
}

// Exercício 5
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

// Exercício 6
const calcArea = (base, altura) => base * altura;
console.log("Área do triângulo:", calcArea(5, 3));

// Exercício 7
const listaDeCompras = ["Arroz", "Feijão", "Batata"];

listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();

console.log(listaDeCompras);

// Exercício 8
const alunos = [
    { nome: "Ana", nota: 8.5, idade: 20 },
    { nome: "João", nota: 6.7, idade: 22 },
    { nome: "Maria", nota: 9.3, idade: 19 },
    { nome: "Carlos", nota: 5.0, idade: 21 },
    { nome: "Beatriz", nota: 7.8, idade: 20 }
];

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log("Aprovados:", aprovados);

const nomeAlunos = alunos.map((aluno) => aluno.nome);
console.log("Alunos:", nomeAlunos);

const somaIdades = alunos.reduce((total, aluno) => total + aluno.idade, 0);
const mediaIdades = somaIdades / alunos.length;
console.log("Soma das idades:", somaIdades);
console.log("Média das idades:", mediaIdades);

const alunoAbaixoDeSeis = alunos.find((aluno) => aluno.nota < 6);
console.log("Aluno com nota abaixo de seis:", alunoAbaixoDeSeis);

// Exercício 9
const titulo = document.getElementById("titulo");
const btnMudar = document.getElementById("btnMudar");

btnMudar.addEventListener("click", () => {
    titulo.innerText = "Título Alterado com Sucesso!";
});

// Exercício 10
let contagem = 0;
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");

btnIncrementar.addEventListener("click", () => {
    contagem++;
    contador.innerText = contagem;
});

// Exercício 11
const paragrafos = document.querySelectorAll(".paragrafo");
const btnDestacar = document.getElementById("btnDestacar");

btnDestacar.addEventListener("click", () => {
    paragrafos.forEach((paragrafo) => {
        paragrafo.classList.add("destaque");
    });
});

// Exercício 12
const campoInput = document.getElementById("campoInput");
const textoRefletido = document.getElementById("textoRefletido");

campoInput.addEventListener("input", () => {
    textoRefletido.innerText = campoInput.value;
});

// Desafio Final
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSub");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");
const resultado = document.getElementById("resultado");

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcular() {
    const valor1 = Number(inputNum1.value);
    const valor2 = Number(inputNum2.value);
    return { valor1, valor2 };
}

btnSoma.addEventListener("click", () => {
    const { valor1, valor2 } = calcular();
    resultado.innerText = somar(valor1, valor2);
});

btnSub.addEventListener("click", () => {
    const { valor1, valor2 } = calcular();
    resultado.innerText = subtrair(valor1, valor2);
});

btnMulti.addEventListener("click", () => {
    const { valor1, valor2 } = calcular();
    resultado.innerText = multiplicar(valor1, valor2);
});

btnDiv.addEventListener("click", () => {
    const { valor1, valor2 } = calcular();

    if (valor2 === 0) {
        resultado.innerText = "Não se divide por 0";
    } else {
        resultado.innerText = dividir(valor1, valor2);
    }
});