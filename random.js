// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,3';

if (numero <= 0.3){
  str = ' MENOR que 0,3';
}

console.log('\n' + numero + str + '\n');
