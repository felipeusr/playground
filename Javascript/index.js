var $_D9_$$ = 'Iphone\'s';
////////////////////////////////
var a = b = c = "String";
////////////////////////////////
let massa = 9.11 * Math.pow(10, -31);
let velocidade = 2.2 * Math.pow(10, 6);
var precisao = 0.1;
var p = massa * velocidade * precisao;
var h = 5.2 * Math.pow(10, -34);
console.log (`ΔX = ${h/p}`)
////////////////////////////////
if (!'x' == 'x') { // && (e)  || (ou)  ! (não)
    console.log('é igual')
} else {console.log('desigual');}
////////////////////////////////
var frutas = ['banana', 'manga'];
delete frutas[1];
console.log(frutas);
////////////////////////////////
objeto = {nome: "Felipe"};
console.log(objeto.nome);
////////////////////////////////
let pc = {nome: "iMac", marca: "Apple"}
for (c in pc) {
    console.log(c);
}
////////////////////////////////
class Pessoa {
    constructor(pessoaNome) {
        this.nome = pessoaNome;
    }
}
var teste = new Pessoa("Felipe");
console.log(teste.nome);
////////////////////////////////
var n1 = 3;
switch (n1) {
    case 1:
        console.log('é 1');
        break;
    case 2:
        console.log('é 2');
        break;
    case 3:
        console.log('é 3');
        break;
    default:
        console.log('nenhum');
        break;
}
////////////////////////////////
var objetos = ["carro","moto","caminhao"];
for (c in objetos) {
    console.log(objetos[c]);
}
////////////////////////////////
var c = 0;
do {
    console.log('c');
    c++;
    break;
} while (c < 5)
////////////////////////////////
var count = 0;
while (count < 10) {
    count++;
    console.log(count);
    if (count == 5) {
        break;
    } else {
        continue;
    }
}
////////////////////////////////
function multiplicar(n) {
    return function(x) {
        return n * x;
    }
}
var calc = multiplicar(10)(5);
console.log(calc);
////////////////////////////////
eval("res = 750 + 250");
console.log(res)
////////////////////////////////
let texto = "João Conceição";
console.log(encodeURI(texto));
var $texto = "Jo%C3%A3o%20Concei%C3%A7%C3%A3o";
console.log(decodeURI($texto))
////////////////////////////////
function numeros(a,b,c,d,e) {
    console.log('Essa função tem: '+arguments.length + ' argumentos');
}
numeros(1,2,3);
console.log('Essa mesma função espera: '+numeros.length+' argumentos');
////////////////////////////////
function calcc(a,b) {
    return a+b;
}
var continha = calcc(2,2); // 4
console.log(continha*continha); // 8
////////////////////////////////
class Persona {
    constructor(nome, idade) {
        this.meuNome = nome;
        this.minhaIdade = idade;
    }

    get saudacoes() {
        return `Meu nome é ${this.meuNome} tenho ${this.minhaIdade} anos!`;
    }
}

var eu = new Persona("Felipe", 17);
console.log(eu.saudacoes);
////////////////////////////////
var c1 = 10;
do {
    console.log("vou ser exibido mesmo assim!");
} while (c > 15)
/////////////////
while (c > 15) {
    console.log("não serei exibido!");
}
////////////////////////////////
class Produto {
    constructor(id, title, description, price, category, image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}

var bola = new Produto(1, "Bola", "Para jogar futebol", 20, "Esporte", "bola.jpg");
console.log(bola.description)
////////////////////////////////