//ejercicio 1

let num1=12.0;
let num2=10;

console.log("Ejercicio 1")
console.log("Suma: ", (num1+num2));
console.log("Resta: ", (num1-num2));
console.log("Multiplicación: ", (num1*num2));
console.log("División: ", (num1/num2));
console.log("Exponente: ", (num1**num2));



//ejercicio2
console.log("Ejercicio 2")

let nombre="JOSE JHONIS ARGUETA LEMUS"
let carnet=" SMSS192422"
let nombre_carnet=nombre.concat(carnet)
console.log(nombre_carnet)


//ejercicio3
console.log("Ejercicio 3")
let numero=124;

let numString=numero.toString();

console.log(`Numero a String: ${numString}`)


//ejercicio4
console.log("Ejercicio 4")
let numLetras="100";

let letras_a_num=parseInt(numLetras);
console.log(`Letras a número: ${letras_a_num}`);

//ejericio5
//constantes
console.log("Ejercicio 5")
const valorMasa=100; //kg
const gravedadTierra=9.8;
const gravedadLuna=1.625;
const gravedadMarte=3.721;
const gravedadMercurio=3.7;


let pesoTierra=valorMasa*gravedadTierra;
let pesoLuna=valorMasa*gravedadLuna;
let pesoMarte=valorMasa*gravedadMarte;
let pesoMercurio=valorMasa*gravedadMercurio;


console.log(`Peso en la tierra: ${pesoTierra.toFixed(2)} Newtons`)
console.log(`Peso en la Luna: ${pesoLuna} Newtons`);
console.log(`Peso en Marte: ${pesoMarte} Newtons`);
console.log(`Peso en Mercurio: ${pesoMercurio} Newtons`);











