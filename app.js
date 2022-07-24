// Seleciona os inputs e outputs relacionados ao tempo
let entradaIda = document.querySelector( '.ida' )
let entradaVolta = document.querySelector( '.volta' )
let entradaDias = document.querySelector( '.dias')
let saida = document.querySelector( '.saida' )
let mes

// Selecionar os inputs e outputs relacionados às horas
let entradaSalario = document.querySelector('.salario')
let entradaHoras = document.querySelector('.horas')
let saida2 = document.querySelector('.saida2')

// Seleciona o elemento .preenchimento
let preenchimento = document.querySelector( '.preenchimento' )

// seleciona botao final
let botao = document.querySelector('button')

// Dispara a função calcular cada vez que o usuário digitar
entradaIda.addEventListener( 'change', validar )
entradaVolta.addEventListener( 'change', validar )
entradaDias.addEventListener('change', validar)

// Define função de validação
function validar() {

    // Pega a string que foi digitada
    let ida = entradaIda.value 
    let volta = entradaVolta.value 
    let dias = entradaDias.value

    
    // Força a conversão para número inteiro
    ida = parseInt( ida )
    volta = parseInt( volta )
    dias = parseInt( dias )
    // Se valor for maior que 0
    if ( ida > 0 && volta > 0 && dias > 0)  {
        let semana = ( ida + volta ) * dias
        mes = (semana*4)/60
        let ano = (semana*48)/60
        mostrar( semana, mes, ano )
               
    }
    
    // Se não for um valor válido
    else {
      limpar()
    }
  
  }


// define função para mostrar o total de horas e preencher a barra
function mostrar( semana, mes, ano ) {
    saida.textContent = "Toda semana, você gasta "+semana+" minutos indo ao trabalho, o que corresponde a "+mes.toFixed(1)+" horas mensais e "+ano+" horas por ano no transporte ao trabalho." 
    porcentagem = (semana*100)/10080
    preenchimento.style.width = porcentagem + '%'
    setTimeout(grafico ( semana ),2000)
  }



// define função para o usuário selecionar o que quer fazer com o tempo


// define função para mostrar o gráfico de acordo com o input
 function grafico( semana ){
  let faixa1 = document.querySelector( '.faixa1' )
  let faixa2 = document.querySelector( '.faixa2' )
  let faixa3 = document.querySelector( '.faixa3' )
  let faixa4 = document.querySelector( '.faixa4' )
  let ida = entradaIda 
  let volta = entradaVolta
  let dias = entradaDias

    // cria condicional de acordo com minutos que usuário passa no transporte
    if (semana > 900){
      faixa4.style.display = "block"
      ida.style.display = "none"
      volta.style.display = "none"
      dias.prop = "readonly"
      botao.style.display = "block"
    } else if (semana > 600 ) {
      faixa3.style.display = "block"
      ida.style.display = "none"
      volta.style.display = "none"
      dias.style.display = "none"
      botao.style.display = "block"
    } else if (semana > 300) {
      faixa2.style.display = "block"
      ida.style.display = "none"
      volta.style.display = "none"
      dias.style.display = "none"
      botao.style.display = "block"
    } else {
      faixa1.style.display = "block"
      ida.style.display = "none"
      volta.style.display = "none"
      dias.style.display = "none"
      botao.style.display = "block"
    }
    
    
 } 

 // define a função caso o usuário não tenha preenchido tudo
function limpar() {

    saida.textContent = "Preencha todos campos"
  
  }


// Começa calculo de dinheiro

entradaSalario.addEventListener( 'change', validar2 )
entradaHoras.addEventListener( 'change', validar2 )

// Define função de validação
function validar2( ) {

    // Pega a string que foi digitada
    let salario = entradaSalario.value 
    let horas = entradaHoras.value 

    // Força a conversão para número inteiro
    salario = parseInt( salario )
    horas = parseInt( horas )

    // Se valor for maior que 0
    if ( salario > 0 && horas > 0 && mes > 0)  {
        let horasmensais = horas*4
        let salarioporhora = salario/horasmensais
        let dinheiroextra = mes*salarioporhora
        saida2.textContent = "Se você ganhasse pelo seu deslocamento, receberia "+dinheiroextra.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+" a mais no fim do mês"
               
    }
    
    // Se não for um valor válido
    else {
      limpar2()
    }
  
  }


  function limpar2() {

    saida2.textContent = "Preencha todos campos, incluindo a primeira calculadora."
  
  }