// Seleciona o elemento <input>
let entrada = document.querySelector( 'input' )

// Seleciona o elemento <output>
let saida = document.querySelector( 'output' )

// Seleciona o elemento .preenchimento
let preenchimento = document.querySelector( '.preenchimento' )



// Dispara a função calcular cada vez que o usuário digitar
entrada.addEventListener( 'input', validar )

// Define função de validação
function validar() {

    // Pega a string que foi digitada
    let valor = entrada.value 
    
    // Força a conversão para número inteiro
    valor = parseInt( valor )


    // Se valor for maior que 0
    if ( valor > 0 ) {
        let semana = valor*(10)
        mostrar( semana )
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


