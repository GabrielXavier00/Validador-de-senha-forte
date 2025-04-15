
export function temComprimentoMinimo(senha, minimo = 8) {
  return senha.length >= minimo;
}

export function contemMaiuscula(senha) {
  return /[A-Z]/.test(senha);
}

export function contemMinuscula(senha) {
  return /[a-z]/.test(senha);
}

export function contemNumero(senha) {
  return /[0-9]/.test(senha);
}

export function contemEspecial(senha) {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha);
}
