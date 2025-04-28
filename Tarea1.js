
const nombre = "Flopi";
let edad = 22;
let mascotas = true;

console.log("Su nommbre es:",nombre);
console.log("Su edad es:",edad);

if (mascotas === true) {
  console.log('Tienes mascotas.');
} else {
  console.log('No tienes mascotas.');
}

const a = 5;
const b = 8;

console.log("\n---------------------------")
console.log("Operaciones matematicas")
console.log("---------------------------")
console.log("\n");
console.log("Suma de 5+8: ",a+b);
console.log("Resta de 5-8: ",a-b);
console.log("Multiplicacion de 5*8: ",5*8);
console.log("Division de 5/8: ",5/8);

console.log("\n---------------------------\n")

const readlineSync = require('readline-sync');
const persona = readlineSync.question("Ingrese su nombre: ");
console.log("-------------------------------")

function saludo(x)
{
    console.log("Hola " + x + ", BIENVENID@!!");
}

saludo(persona);

console.log("\n---------------------------\n")

const frutas = ["Pera","Manzana","Sandia","Frutilla","Arandano"];

for(let i=0; i<frutas.length;i++)
{
  console.log(i+" = "+frutas[i]);
}

console.log("\n---------------------------\n")

const numeros = [2,3,5];

const numpordos = numeros.map(function(num){
  return num*2;
});

console.log(numpordos);

console.log("\n---------------------------\n")

const people = [
  {
    firstname: "Cristopher",
    age: 20
  },
  {
    firstname: "Florencia",
    age: 22
  }
];

people.forEach(gente => {
  console.log('Nombre: ' + gente.firstname);
  console.log('Edad: ' + gente.age);
  console.log('---------------------');
});

console.log("\n---------------------------\n")

const x = [1,3,5,7,8,2,9];

const mayoresque = x.filter(function(y) {
  return y>5;
});

console.log("Arreglo original: "+x)
console.log("Arreglo con numeros mayores que 5: "+mayoresque);

console.log("\n---------------------------\n")

const sum = [1,3,5,7,8,2,9];

const sumatotal = sum.reduce(function(acumulador, sumita) {
  return acumulador + sumita;
}, 0);

console.log("Arreglo a sumar: "+sum);
console.log("Suma total del arreglo: "+sumatotal);

console.log("\n---------------------------\n")

async function esperarMensaje() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return '¡Listo después de 2 segundos!';
}

async function mostrarMensaje() {
  const mensaje = await esperarMensaje();
  console.log(mensaje);
}

mostrarMensaje();
