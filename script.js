// Verifica se o login e senha são válidos
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
const submitBtn = document.querySelector('#submit-btn');
const checBox = document.querySelector('#agreement');

function desabilitaBotao() {
  submitBtn.setAttribute('disabled', 'disabled');
}

function habilitaBotao() {
  submitBtn.removeAttribute('disabled');
}

function verificaCheck() {
  if (checBox.checked) {
    habilitaBotao();
  } else {
    desabilitaBotao();
  }
}

checBox.addEventListener('click', verificaCheck);
