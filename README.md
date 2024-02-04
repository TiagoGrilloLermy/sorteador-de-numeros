# Sorteador de Números Aleatórios

![Inserir logo aqui](link_da_imagem)

Este é um simples sorteador de números aleatórios desenvolvido usando HTML, CSS e JavaScript. A funcionalidade principal é baseada na função `Math.random()` do JavaScript, proporcionando resultados verdadeiramente aleatórios.

## Como Funciona

1. **HTML (index.html):**
   ```html
   <!DOCTYPE html>
   <html lang="pt-br">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="style.css">
       <title>Sorteador de Números</title>
   </head>
   <body>
       <div class="container">
           <h1>Sorteador de Números</h1>
           <label for="intervalo">Intervalo:</label>
           <input type="text" id="intervalo" placeholder="Ex: 1-100">
           <button onclick="sortearNumero()">Sortear</button>
           <p id="resultado"></p>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **CSS (style.css):**
   ```css
   body {
       font-family: 'Arial', sans-serif;
       background-color: #f0f0f0;
       margin: 0;
       display: flex;
       align-items: center;
       justify-content: center;
       height: 100vh;
   }

   .container {
       text-align: center;
       background-color: #fff;
       padding: 20px;
       border-radius: 8px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   h1 {
       color: #333;
   }

   label {
       font-size: 18px;
       margin-right: 10px;
   }

   input {
       padding: 8px;
       font-size: 16px;
   }

   button {
       padding: 10px;
       font-size: 16px;
       cursor: pointer;
       background-color: #4caf50;
       color: #fff;
       border: none;
       border-radius: 4px;
   }

   p {
       margin-top: 20px;
       font-size: 24px;
       color: #333;
   }
   ```

3. **JavaScript (script.js):**
   ```javascript
   function sortearNumero() {
       var intervalo = document.getElementById("intervalo").value;
       var numeros = intervalo.split("-");
       var numeroAleatorio = Math.floor(Math.random() * (parseInt(numeros[1]) - parseInt(numeros[0]) + 1)) + parseInt(numeros[0]);
       document.getElementById("resultado").innerText = `Número Sorteado: ${numeroAleatorio}`;
   }
   ```

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.

2. Insira o intervalo desejado de números no campo fornecido.

3. Clique no botão "Sortear" para obter um número aleatório dentro do intervalo especificado.

## Personalização

Sinta-se à vontade para personalizar e integrar este sorteador em seus próprios projetos. Seja criativo!

## Contribuições

Contribuições são bem-vindas! Caso encontre algum problema ou tenha sugestões de aprimoramento, sinta-se à vontade para criar issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE), o que significa que você pode usá-lo livremente em seus projetos, comerciais ou não.

