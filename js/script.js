// Variabili
var lista = document.getElementById('lista')
var divTre = false;
var divCinque = false;
var divTreCinque = false;


for (var i = 1; i < 101; i++) {

  if (i % 3 == 0 && i % 5 == 0 ) {
    divTreCinque = true;
    console.log('FizzBuzz')
  } else if (i % 3 == 0 ) {
    divTre = true;
    console.log('Fizz')
  } else if (i % 5 == 0 ) {
    divCinque = true;
    console.log('Buzz')
  } else {
    console.log(i)
  }

}
