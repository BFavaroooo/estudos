// Selecionar elementos do DOM
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const passwordDisplay = document.getElementById("password");

// Conjuntos de caracteres
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

// Função para gerar senha
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let characterPool = "";

  // Adicionar caracteres com base nas opções selecionadas
  if (uppercaseCheckbox.checked) characterPool += uppercaseChars;
  if (lowercaseCheckbox.checked) characterPool += lowercaseChars;
  if (numbersCheckbox.checked) characterPool += numberChars;
  if (symbolsCheckbox.checked) characterPool += symbolChars;

  // Garantir que há caracteres disponíveis para a senha
  if (characterPool === "") {
    passwordDisplay.textContent = "Selecione pelo menos uma opção!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  // Exibir a senha gerada
  passwordDisplay.textContent = password;
}

// Adicionar evento ao botão de gerar
generateButton.addEventListener("click", generatePassword);
