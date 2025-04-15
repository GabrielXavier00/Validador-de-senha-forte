import * as validacoes from "./validacoesSenha.js";

const senhaInput = document.querySelector('input');
const progressBar = document.querySelector('.indicator');


const checkboxes = {
  digits: document.getElementById('digits'),
  lengthPassword: document.getElementById('lenghtPassword'),
  symbols: document.getElementById('symbols'),
  capital: document.getElementById('capital'),
  lower: document.getElementById('lower')

};

senhaInput.addEventListener('input', (e) => {
  const senha = e.target.value;


  checkboxes.digits.checked = validacoes.contemNumero(senha);
  checkboxes.lengthPassword.checked = validacoes.temComprimentoMinimo(senha);
  checkboxes.symbols.checked = validacoes.contemEspecial(senha);
  checkboxes.capital.checked = validacoes.contemMaiuscula(senha);
  checkboxes.lower.checked = validacoes.contemMinuscula(senha);

  
  const criteriosAtendidos = Object.values(checkboxes)
    .filter(checkbox => checkbox.checked).length;
  
  const progresso = (criteriosAtendidos / 5) * 100;
  progressBar.style.width = `${progresso}%`;


  progressBar.style.backgroundColor = 
    progresso < 40 ? '#ff4444' :
    progresso < 70 ? '#ffd700' :
    '#4CAF50';
});