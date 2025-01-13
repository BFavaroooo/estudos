// Selecionar elementos do DOM
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerMessage = document.getElementById("register-message");
const loginMessage = document.getElementById("login-message");
const welcomeSection = document.getElementById("welcome-section");
const userNameDisplay = document.getElementById("user-name");
const logoutButton = document.getElementById("logout-button");

// Função para registrar um usuário
registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir recarregamento da página

  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (localStorage.getItem(username)) {
    registerMessage.textContent = "Usuário já registrado!";
  } else {
    // Armazenar dados no Local Storage
    localStorage.setItem(username, password);
    registerMessage.textContent = "Usuário registrado com sucesso!";
  }

  registerForm.reset();
});

// Função para fazer login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    loginMessage.textContent = "";
    loginForm.reset();
    loginUser(username);
  } else {
    loginMessage.textContent = "Usuário ou senha incorretos!";
  }
});

// Função para exibir mensagem de boas-vindas
function loginUser(username) {
  document.getElementById("register-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
  welcomeSection.style.display = "block";
  userNameDisplay.textContent = username;
}

// Função para logout
logoutButton.addEventListener("click", () => {
  welcomeSection.style.display = "none";
  document.getElementById("register-section").style.display = "block";
  document.getElementById("login-section").style.display = "block";
});
