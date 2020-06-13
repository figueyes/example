//TITULO
//Esta linea no se compila
//3 tipos de variables
// var variable modificable
// const constante
// let variable modificable

var nombre = "Chedrito";
var number = 33;

let variable = "perro"; //string
variable = 34; //integer o int
let decimal = 34.5 // float
let isPedro = true; //boolean
let arreglo = ["perro", "juan", "diego"];

//Averigua xq esto da false, true
4 == '4'
4 === '4' 

//FUNCION

//declaración tradicional de funciones
function function1 () {
    console.log("Hola Mundo");
}
//arrow functions
(p) => {

}

//arrow function en minimalista
(p) => {p == "hola"};


const funcion1 = (nombre, number) => {
    //tu codigo
    console.log("Hola " + nombre + " y tiene " + number + " años");
}

let pedros = ["pedro I", "pedro riveros", "pedro picapiedras"]

pedros.filter( (p) => {p == "pedro I"}) //Es una función
//true
//false
//false

//pedro I