function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    var guarda = ''
    if (Number(ini.value.length) == " " || Number(fim.value.length) === 0 || Number(fim.value.length) === 0 ){
          guarda =  res.innerHTML = 'Impossivel Contar, insira os valores nos campo(s)!!'
    }else if (Number(ini.value) < Number(fim.value)){
      guarda = res.innerHTML = "Contando: "
        for ( var v=Number(ini.value); v<=Number(fim.value); v+=Number(pass.value)){
            guarda = res.innerHTML =  guarda + `${v} `
          }  
    }else{
      guarda = res.innerHTML = "Contando: "
      for ( var v=Number(ini.value); v>=Number(fim.value); v-=Number(pass.value)){
        guarda = res.innerHTML =  guarda + `${v} `
    }
   }
    guarda.innerHTML += `${res}`
    guarda.innerHTML += `${res}`
}