const minInput = document.querySelector("#min");
const maxInput = document.querySelector("#max");
const resultadoDiv = document.querySelector("#resultado");

document.getElementById("sortear").addEventListener("click", function () {
  // Obtenha os valores dos campos de entrada
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  // Verifique se os valores são numéricos válidos
  if (isNaN(min) || isNaN(max)) {
    alert("Por favor, insira valores numéricos válidos.");
    return;
  }

  // Cálculo do número aleatório
  let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  // Exibir o resultado na div
  resultadoDiv.textContent = `Número Sorteado: ${numeroAleatorio}`;

  resultadoDiv.style.cssText = `
    display: block;
    width: 310px;
    height: auto;
    font-weight: bold;
    font-size: 25px;
    color: #fff;
    border-radius: 20px;
    margin: 20px auto;
    padding: 12px 24px;
    background: #79428d;
    text-align: center;
    border: 1px solid #fff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;
});
