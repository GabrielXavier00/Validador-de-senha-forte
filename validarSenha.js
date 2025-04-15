import { temComprimentoMinimo } from "./validacoesSenha.js"

function validarSenha(senha) {
  const erros = []

  if(!temComprimentoMinimo(senha)) {
    erros.push("Adicione os caracteres minimos")
  }

  return {
    valida: erros.length === 0, 
    mensagens: erros
  }
}

const resultado = validarSenha("Senha123!")

console.log(resultado);

const resultado2 = validarSenha("123")
console.log(resultado2);
