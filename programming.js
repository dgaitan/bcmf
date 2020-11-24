/**
*  Variables
*  
*  Las variables son espacios en nuestra memoria
*  que pueden cambiar o ser actualizadas en cualquier
*  parte de nuestro codigo.
*/

let name = 'David'; // Variable type String
let age = 25; // Variable type Integer
let money = 105.10; // Variable type Float
let isMale = true; // Variable type Boolean

/**
*  Arrays
*
*  Los arrays son colecciones de datos
*  que pueden tener datos simples como una lista.
*
*  @link https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
*/
let fruits = ['apple', 'orange', 'watermelon'];
let names = ['David', 'Ivan', 'Alex'];
let ages = [25, 18, 20];


/**
* Objetos
* 
* Son colecciones de datos con key => value
* Pueden ser modificables
*/
let person = {
  firstName: 'David',
  lastName: 'Gaitan',
  age: 25,
  profesion: 'Web Developer'
};

let car = {
  color: 'red',
  brand: 'Toyota'
}

/**
* Funciones
* 
* las funciones son "subprogramas" que ejecuta
* declaraciones y realiza operaciones, devolviendo
* multiples resultados
*/

function sum(a, b) {
  return a + b
}

function rest(a, b) {
  return a - b;
}

function division(a, b) {
   return a / b;
}

function percentage(amount, percentage) {
  let calculation = amount / 100 * percentage;
  
  return calculation;
}


/**
* Conditions
* 
* Las condiciones son codigos que permiten
* ejecutar sentencias en dependencia de 
* las mismas condiciones
*/

function getPercentage(amount, percentage) {
  // if amount or percentage isn't string, return false and alert notification
  if (typeof(amount) === 'number' && typeof(percentage) === 'number' ) {
    let calculation = amount / 100 * percentage;
  
    return calculation;
  }
  
  alert( 'Arguments must be numbers' );
  return false;
}

function askAge() {
  let age = prompt('Your age?', 0);
  
  if (age === '') {
    alert("Please enter a number");
    age = prompt('Your age?', 0);
    return false;
  }
  
  if (age < 18) {
    alert( "You can't see the site" );
    return false;
  }
  
  console.log('Welcome to the site');
  return true;
}

/**
* Clases
* 
* Son instancias que permiten manipular multiples
* operaciones, de manera que permitan re-utilizar
* codigo atravez de multiples instrucciones
*/

/**
* Clase/Instancia User
* - Atributos:
*   - First Name
*   - Last Name
*   - Age
*   - Profesion
* 
* - Acciones/Metodos:
*    - Saludar
*    - Trabajar
*/
function User() {
  this.firstName = '';
  this.lastName = '';
  this.age = 0;
  this.profesion = '';
  
  this.sayHello = function () {
    return "Hola, mi nombre es " + this.getFirstName() + ' ' + this.getLastName();
  }
  
  this.getFirstName = function () {
    return this.firstName;
  }
  
  this.getLastName = function () {
    return this.lastName;
  }
  
  this.setFirstName = function (name) {
    this.firstName = name
  }
  
  this.setLastName = function (lastName) {
    this.lastName = lastName
  }
}

let userOne = new User();
let userTwo = new User();

userOne.setFirstName('Alex');
userOne.setLastName('Moncada');
userTwo.setFirstName('David');


console.log(userOne.sayHello());
