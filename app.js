// Seleciona o elemento <input>
let entradaIda = document.querySelector( '.ida' )

let entradaVolta = document.querySelector( '.volta' )

// Seleciona o elemento <output>
let saida = document.querySelector( 'output' )

// Seleciona o elemento .preenchimento
let preenchimento = document.querySelector( '.preenchimento' )



// Dispara a função calcular cada vez que o usuário digitar
entradaIda.addEventListener( 'input', validar )
entradaVolta.addEventListener( 'input', validar )


// Define função de validação
function validar() {

    // Pega a string que foi digitada
    let ida = entradaIda.value 
    let volta = entradaVolta.value 

    
    // Força a conversão para número inteiro
    ida = parseInt( ida )
    volta = parseInt( volta )

    // Se valor for maior que 0
    if ( ida >= 0 && volta >= 0 )  {
        let semana = ( ida + volta ) * 5
        mostrar( semana ) // tem como colocar "return" pra variável "sair" da função?
    }
    
    // Se não for um valor válido
    else {
      limpar()
    }
  
  }
 

function mostrar( semana ) {

    saida.textContent = "Você gasta "+semana+" minutos semanais" 
    porcentagem = (semana*100)/10080
    preenchimento.style.width = porcentagem + '%'
    
    
}

function limpar() {

    saida.textContent = "Digite um valor numérico absoluto"
    saida.style.fontStyle = "italic"
  
  }


