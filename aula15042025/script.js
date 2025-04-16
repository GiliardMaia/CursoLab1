// o (//) servi para fazer um comentario e se quiser testa so colocar// no inicio que nao roda com ele


//console.log("Olá Mundo!");

/*wefgeqrgewrgertwre
wergwergewrgwergerg
ergewrgewrgergreg
ewrgwergergergreg
*/

// usa let para declarar uma variavel

/*
let nome = "Giliard Rodrigues Maia";
let idade = 33;
let vivo = true;
const PI = 3.14159;

console.log(nome)
console.log(idade)
console.log(vivo)
console.log(PI)

alert("Olá " + nome);
//alert(Olá ${nome}´)

let soma = 20 + 20;
console.log(soma)
soma++;
console.log(soma)

if(idade > 50 && idade <=60){
    alert("Quase idoso!");
}else if (idade > 60){
    alert("idoso");
}else{
    alert("Jovem");
}

let diaDaSemana = 3;
let nomeDia;

switch (diaDaSemana) {
    case 1:
        nomeDia = "Domingo";
    case 2:
        nomeDia = "Segunda";
    case 3:
        nomeDia = "Terça-feira";
        break;
        ... outros dias
    default
        nomeDia = "Dia inválido"; 
}

console.log(nomeDia)

*/

/*
for(let i = 0; i<=100; i++){
    console.log(`Número ${i}`);
}
*/

/*
let contador = 1;
while(contador <=5){
    console.log(`While:${contador}`)
    contador++
}
*/


function olaMundo(){
    let inputNome = document.getElementById("inputNome");
    console.log(inputNome);
    let nome = inputNome.value;
    alert("olá " + nome +", seja bem vindo!");
}

let btEnviar = document.getElementById("btEnviar");
btEnviar.onclick = olaMundo;
