var numero = document.getElementsByTagName('input')[0]
var list_numero = document.querySelector('select')
var principal = document.querySelector('main')
var numeros = []


function addnumero() {
    
    let novo_elemento = document.createElement('option')
    if (Number.parseInt(numero.value) >= 1 && Number.parseInt(numero.value) <= 100) {
        novo_elemento.innerHTML = numero.value
        numeros.push(numero.value)
    } else {
        window.alert('Somente numeros entre 1 e 100')
    }
    
    list_numero.appendChild(novo_elemento)
}

let div_result = document.createElement('div') //Precisa ser criado aqui senão vai ficar criando um novo sempre q a função ser chamada

function zerar() {
    numeros = []
    list_numero.innerHTML = ''
    let log = document.getElementsByTagName('div')[1]
    log.innerHTML = ''
}

function finalizar() {
    let maior = 0
    let menor = 0
    let soma = 0
    
    for (let n = 0; n < numeros.length; n++) {
        if (n==0) {
            maior, menor = numeros[n]
        } else {
            if (Number(numeros[n]) > maior) {
                maior = Number(numeros[n])
            }
            if (Number(numeros[n]) < menor) {
                menor = Number(numeros[n])
            }
        }
        soma += Number(numeros[n])
    }

    let media = soma/numeros.length
    div_result.innerHTML = `O maior numero é ${maior}<br>`
    div_result.innerHTML += `O menor numero é ${menor}<br>`
    div_result.innerHTML += `A soma de todos os Números é: ${soma}<br>`
    div_result.innerHTML += `A média de todos os valores é: ${media}`
    principal.appendChild(div_result)
}