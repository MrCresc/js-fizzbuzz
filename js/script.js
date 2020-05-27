// Variabili
var lista = document.getElementById('lista')
var divTre = false;
var divCinque = false;
var divTreCinque = false;
// Numero da 1 a 100
for (var i = 1; i < 101; i++) {
// Imposto la numerazione standard
  var numerazione = i
// Imposto la numerazione a seconda delle divisioni
  if (i % 3 == 0 && i % 5 == 0 ) {
    divTreCinque;
    numerazione = "FizzBuzz"
  } else if (i % 3 == 0 ) {
    divTre;
    numerazione = "Fizz"
  } else if (i % 5 == 0 ) {
    divCinque;
    numerazione = "Buzz"
  }
  // Scrivo il risultato nell'HTML
lista.innerHTML += "<li>" + numerazione + "</li>"
}
