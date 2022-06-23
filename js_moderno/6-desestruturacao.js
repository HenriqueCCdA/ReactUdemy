const frutas = ['laranja', 'banana', 'uva'];

// let [ fruta1, fruta2, fruta3, fruta4] = frutas;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(fruta4);

let [ fruta1, , fruta3] = frutas;

console.log(fruta1);
console.log(fruta3);

const pessoa = {
    nome: 'João',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Português'
};

let { idade, idioma } = pessoa;

console.log(idade);
console.log(idioma);

const localidade = ({ pais, idioma }) => `Você mora no ${pais} e fala ${idioma}`;

console.log(localidade(pessoa));