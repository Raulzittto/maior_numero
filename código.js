console.log("Digite um número para obter sua maior combinação: ");
let numero = "";
let maior = [];
process.stdin.on("data", function (data) {
  numero = data.toString().trim();
  numero = numero.split("");
  for (let i = 0; i < numero.length; i++) {
    for (let j = 0; j < numero.length; j++) {
      if (numero[j] < numero[i]) {
        let aux = numero[i];
        numero[i] = numero[j];
        numero[j] = aux;
      }
      if (!maior.includes(numero.join(""))) maior.push(numero.join(""));
    }
  }

  var array = [];
  array.push(maior[maior.length - 1]);

  console.log("O maior número será: " + array);
  process.exit();
});
