let quantity = document.getElementById("quantity");
let from = document.getElementById("from");
let until = document.getElementById("until");
let button = document.getElementById("button");
let result = document.querySelector(".result")
let aside = document.querySelector("aside")

// Coloca os valores dentro das variáveis.
button.addEventListener("click", () => {
  const quantityValue = parseInt(quantity.value);
  const fromValue = parseInt(from.value);
  const untilValue = parseInt(until.value);

  // Verifica se os campos estão preenchidos
  if (!quantityValue || !fromValue || !untilValue) {
    alert("Todos os campos devem ser preenchidos.");
    return; // Sai da função se os campos não estiverem preenchidos
  }

  // Verifica se o 'de' é menor que o 'até'
  if (fromValue >= untilValue) {
    alert("O valor 'De' deve ser menor que o valor 'Até'.");
    return;
  }

  // Verifica se a quantidade de números sorteados é válida
  if (quantityValue > untilValue - fromValue + 1) {
    alert("A quantidade de números sorteados não pode exceder o intervalo.");
    return;
  }

  // Cria o array com o intervalo
  const intervalArray = [];
  for (let i = fromValue; i <= untilValue; i++) {
    intervalArray.push(i);
  }

  // Função para gerar um número aleatório e removê-lo do array pra que não repita
  function getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * intervalArray.length); // Gera um índice aleatório
    const randomNumber = intervalArray[randomIndex]; // Pega o número
    intervalArray.splice(randomIndex, 1); // Remove o número sorteado do array
    return randomNumber; // Retorna o número sorteado
  }

  // Cria um array para armazenar os números sorteados
  const drawnNumbers = [];

  // Gera os números sorteados
  for (let i = 0; i < quantityValue; i++) {
    const number = getRandomNumber();
    drawnNumbers.push(number);
  }
  aside.classList.remove("hide");
  result.textContent = drawnNumbers.join(", ");
});
