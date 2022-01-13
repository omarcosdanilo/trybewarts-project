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

// ========== Substituindo a tag form pelos valores dos input ===========
let nome = document.querySelector('#input-name');
let sobreNome = document.querySelector('#input-lastname');
let email = document.querySelector('#input-email');
let casa = document.querySelector('#house');
let familia = document.querySelector('input[name=family]:checked');
const materias = [];
document.querySelectorAll('input[class=subject]:checked').forEach((element) => {
  materias.push(element.value);
});
let nota = document.querySelector('input[name=rate]:checked');
let observacoes = document.querySelector('#textarea');

function variaveis() {
  nome = document.querySelector('#input-name');
  sobreNome = document.querySelector('#input-lastname');
  email = document.querySelector('#input-email');
  casa = document.querySelector('#house');
  familia = document.querySelector('input[name=family]:checked');
  document.querySelectorAll('input[class=subject]:checked').forEach((element) => {
    materias.push(element.value);
  });
  nota = document.querySelector('input[name=rate]:checked');
  observacoes = document.querySelector('#textarea');
}

function criaParagrafo(event) {
  variaveis();
  event.preventDefault();

  const paragrafo = document.querySelector('#objeto');

  paragrafo.innerHTML = `Nome: ${nome.value} ${sobreNome.value}
  Email: ${email.value}
  Casa: ${casa.value}
  Família: ${familia.value}
  Matérias: ${materias[0]}, ${materias[1]}, ${materias[2]}
  Avaliação: ${nota.value}
  Observações: ${observacoes.value}`;
}

const botao = document.querySelector('#submit-btn');
botao.addEventListener('click', criaParagrafo);
