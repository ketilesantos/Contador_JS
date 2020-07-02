function counting() {
  let start = document.querySelector('input#txtini')
  let end = document.querySelector('input#txtfim')
  let step = document.querySelector('input#txtpasso')
  let result = document.querySelector('div#res')
  let guard = ''
  if (Number(start.value.length) === 0 || Number(end.value.length) === 0
    || Number(step.value.length) === 0) {
    guard = result.innerHTML = 'Impossivel Contar, insira os valores nos campo(s)!!'
  }
  else {
    if (Number(step.value <= 0)) {
      alert('Procedimento Invalido! Será considerado o valor 1 para o Pular.')
      Number(step.value = 1)
    }
    if (Number(start.value) < Number(end.value)) {
      guard = result.innerHTML = "Contando: "
      for (var v = Number(start.value); v <= Number(end.value); v += Number(step.value)) {
        guard = result.innerHTML = guard + ` ${v}  \u{1F449}`
      } guard = result.innerHTML = guard + ` ${v}  \u{1F3C1}`
    } else {
      guard = result.innerHTML = "Contando: "
      for (var v = Number(start.value); v >= Number(end.value); v -= Number(step.value)) {
        guard = result.innerHTML = guard + ` ${v}  \u{1F449}`
      } guard = result.innerHTML = guard + ` ${v}  \u{1F3C1}`
    }
  }
  guard.innerHTML += `${result}`
}