// Variabili
var lista = document.getElementById('lista')
// Numero da 1 a 100
for (var i = 1; i < 101; i++) {
// Imposto la numerazione standard
  var numerazione = i
// Imposto la numerazione a seconda delle divisioni
  if (i % 3 == 0 && i % 5 == 0 ) {
    numerazione = "FizzBuzz"
    lista.innerHTML += "<li class= fizzbuzz>" + numerazione + "</li>"
  } else if (i % 3 == 0 ) {
    numerazione = "Fizz"
    lista.innerHTML += "<li class= fizz>" + numerazione + "</li>"
  } else if (i % 5 == 0 ) {
    numerazione = "Buzz"
    lista.innerHTML += "<li class= buzz>" + numerazione + "</li>"
  } else {
    lista.innerHTML += "<li>" + numerazione + "</li>"
  }
}
