//---------Até 5 horas de evento-----------
//Carne: 400 gramas por pessoa
//Cerveja: 1200ml por Pessoa
//Refrigerante/Água: 1000ml por pessoa

//------A partir de 6 horas de evento------
//Carne: 650 gramas por pessoa
//Cerveja: 2000ml por Pessoa
//Refrigerante/Água: 1500ml por pessoa


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let saida = document.getElementsByClassName("resultado")[0]

function calcular(){
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let carnePorPessoa = qtdCarne(duracao)
  let cervejaPorPessoa = qtdCerveja(duracao)
  let refriPorPessoa = qtdRefri(duracao)

  let totalCarne = carnePorPessoa * adultos + carnePorPessoa/2 * criancas
  let totalCerveja = cervejaPorPessoa * adultos 
  let totalRefri = refriPorPessoa * adultos + refriPorPessoa/2 * criancas

  totais(totalCarne, totalCerveja, totalRefri)
}

let qtdCarne = function(duracao){
  if(duracao>=6){
    return 650
  }else{
    return 400
  }
}
let qtdCerveja = function(duracao){
  if(duracao>=6){
    return 2000
  }else{
    return 1200
  }
}
let qtdRefri = function(duracao){
  if(duracao>=6){
    return 1500
  }else{
    return 1000
  }
}
let totais = function(carne, cerveja, refri){
  saida.innerHTML = `<p>${carne / 1000} Kg de carne</p>`
  saida.innerHTML += `<p>${Math.ceil(cerveja / 350)} latas de cerveja</p>`
  saida.innerHTML += `<p>${Math.ceil(refri / 2000)} garrafas pet de 2 litros</p>`
}