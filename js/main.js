// const variable = "soy una cadena de texto"
// console.log(variable[5]);

// const numero = 51;

// const isBoolean = true;

// let arraySample = ["string", 27, true, [1,2,3], {name: "Dani", age: 27}]

// arraySample = 2;

// console.log(arraySample.length);

// for (let i = 0; i < arraySample.length; i++) {
//  let arrayPosition = (i+1) + ": " + arraySample[i]; 
//  console.log(arrayPosition);  
// }

// console.log(arraySample[3][4]);
// console.log(arraySample[4][1]);

// const arraySample2 = [{name: "Dani", age: 27}, {name: "Noelia", age: 24}]


//PUSH

// const numeros = [1,2,3,4,5,6];
// console.log(numeros.push(7,8,9))
// console.log(numeros);

// //CONCAT
// var equipos_a = ['Valencia', 'Barça', 'Real Madrid'];
// var equipos_b = ['Hercules', 'Zaragoza', 'Valladolid'];

// var equipos_copa = equipos_a.concat(equipos_b);
// console.log(equipos_copa); // ["Valencia", "Barça", "RealMadrid", "Hercules", "Zaragoza", "Valladolid"]
// console.log(equipos_a); // ["Valencia", "Barça", "Real Madrid"]

// //JOIN

// const nombres = ['Manuel', 'Antonio', 'Pepe'];

// console.log(nombres);

// const nuevoString = nombres.join('--'); //"Manuel-Antonio-Pepe"

// console.log(nuevoString);

// // Reverse

// var nombres = ['Manuel', 'Antonio', 'Pepe'];
// nombres.reverse();
// console.log(nombres); // ["Pepe", "Antonio", "Manuel"]

// // UNSHIFT

// var nombres = ['Manuel', 'Antonio', 'Pepe'];
// var valor_nombres = nombres.unshift('Jesús');
// console.log(valor_nombres); // 4
// console.log(nombres); // ["Jesús","Manuel","Antonio","Pepe"]

const letterDni = "H"

function dniValidator(numDni, letterDni) {
  const lettersDni = "TRWAGMYFPDXBNJZSQVHLCKET".split("");
  
  const letterDniPositition = numDni % 23;

  if(lettersDni[letterDniPositition] === letterDni) {
    return true
  }

  return false;
}

console.log(dniValidator(12345678, letterDni));




