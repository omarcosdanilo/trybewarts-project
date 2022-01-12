// ========= Verifica se o login e senha são válidos ===========
function verificaLogin() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#input-senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const myBtn = document.querySelector('#btn-login');
myBtn.addEventListener('click', verificaLogin);

// ============ Verifica se o check está marcado =============
const button = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');

function desabilitaBotao() {
  button.setAttribute('disabled', 'disabled');
}

function habilitaBotao() {
  button.removeAttribute('disabled');
}

function verificaCheck() {
  if (check.checked) {
    habilitaBotao();
  } else {
    desabilitaBotao();
  }
}
check.addEventListener('click', verificaCheck);

// ========== Contador da text area ========
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const teste = counter.innerHTML;

function contador() {
  const valor = teste - textArea.value.length;
  counter.innerHTML = valor;
}
textArea.addEventListener('input', contador);
