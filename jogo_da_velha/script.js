var caixas = document.getElementsByTagName('button')
var container = document.getElementsByTagName('div')[1]

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
    }
}
