function check() {
  const email = document.getElementById('inputEmail').value;
  const senha = document.getElementById('inputSenha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const entrar = document.getElementById('Login');
entrar.addEventListener('click', check);
