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

const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
function caracteres() {
  const teste2 = textArea.textLength;
  const resultado = 500 - teste2;
  contador.innerHTML = `Caracteres: ${resultado}.`;
}
textArea.addEventListener('input', caracteres);
check.addEventListener('click', verificaCheck);
