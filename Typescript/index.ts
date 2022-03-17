import Produto from './Produto';

var n1:number = 3;
var text:string = "Hello World!";
var boolStatus:boolean = true;
var any:any = "any";

// array implicíto --> ["..."]
var nomes:string[] = ["Leo", "Ana", "Patrick"];
nomes.push("Lucky");
nomes.push("Noel");

// array explícito --> []
var alunos:Array<any> = [];
alunos.push("Leo");
alunos.push("Luccas");

// objeto implicíto --> {chave/valor}
var notas:object = {"Maria":8.9, "Lucky":5.5, "Jonny":9}
// função
function somar (x:number, y:number) {
    return x + y;
}

// função seta
const multiplicar = (x:number, y:number) => x*y;

// classe
var bola = new Produto("Bola", 10);


console.log(`var n1:number = ${n1}`);
console.log(`var text:string = ${text}`);
console.log(`var boolStatus:boolean = ${boolStatus}`);
console.log(`var any:any = ${any}`);
console.log(`array implícito = ${nomes}`);
console.log(`array explícito = ${alunos}`);
for (let key in notas) {
    let value = notas[key];
    console.log(`var notas:object = ${key} tirou nota ${value} na prova.`);
}
console.log(somar(4, 4));
console.log(multiplicar(5, 5));
console.log(bola.oferta());
console.log(`preço da ${bola.nome} é de ${bola.preco} Reais.`);

// use 'tsc -t es5 index.ts'