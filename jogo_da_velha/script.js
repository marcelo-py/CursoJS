var caixas = document.getElementsByTagName('button')
var container = document.getElementsByTagName('div')[1]
var res = document.getElementsByTagName('div')[2]

var marcados = []

for (let c = 0; c<caixas.length; c++) {
    caixas[c].addEventListener('click', caixa)
    caixas[c].setAttribute('value', c)
}

function caixa() {
    if (this.innerHTML.length == 0) {
        if (marcados.length == 0 || marcados[marcados.length - 1] == 'O') {
            marcados.push('X')
            this.innerHTML = 'X'
        } else {
            marcados.push('O')
            this.innerHTML = 'O'
        }
        container.innerHTML = marcados
        if (caixas[0].innerHTML == 'X' && caixas[1].innerHTML == 'X' && caixas[2].innerHTML == 'X') {
            res.innerHTML = 'Primeira linha X ganhou'
        }
    }
    
}
