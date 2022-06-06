// Seleciona o elemento <input>
let entradaIda = document.querySelector( '.ida' )

let entradaVolta = document.querySelector( '.volta' )

// Seleciona o elemento <output>
let saida = document.querySelector( 'output' )

// Seleciona o elemento .preenchimento
let preenchimento = document.querySelector( '.preenchimento' )



// Dispara a função calcular cada vez que o usuário digitar
entradaIda.addEventListener( 'change', validar )
entradaVolta.addEventListener( 'change', validar )


// Define função de validação
function validar() {

    // Pega a string que foi digitada
    let ida = entradaIda.value 
    let volta = entradaVolta.value 

    
    // Força a conversão para número inteiro
    ida = parseInt( ida )
    volta = parseInt( volta )

    // Se valor for maior que 0
    if ( ida > 0 && volta > 0 )  {
        let semana = ( ida + volta ) * 5
        let mes = (semana*4)/60
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

    saida.textContent = "Considerando uma semana de 5 dias, você gasta "+semana+" minutos semanais, o que corresponde a "+mes.toFixed(2)+" horas mensais e "+ano+" horas por ano no transporte ao trabalho." 
    porcentagem = (semana*100)/10080
    preenchimento.style.width = porcentagem + '%'
    setTimeout(grafico ( semana ),2000)
   
  }

// define função para mostrar o gráfico de acordo com o input
 function grafico( semana ){
  let faixa1 = document.querySelector( '.faixa1' )
  let faixa2 = document.querySelector( '.faixa2' )
  let faixa3 = document.querySelector( '.faixa3' )
  let faixa4 = document.querySelector( '.faixa4' )

    // cria condicional de acordo com minutos que usuário passa no transporte
    if (semana > 900){
      faixa4.style.display = "block"
    } else if (semana > 600 ) {
      faixa3.style.display = "block"
    } else if (semana > 300) {
      faixa2.style.display = "block"
    } else {
      faixa1.style.display = "block"
    }
    
    
 } 

 // define a função caso o usuário não tenha preenchido tudo
function limpar() {

    saida.textContent = "Digite um valor numérico absoluto nos dois campos"
  
  }


