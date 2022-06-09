var caixas = document.getElementsByTagName('input')
var container = document.getElementsByTagName('div')[1]

var marcados = []

for (let c = 0; c<caixas.length; c++) {
    caixas[c].addEventListener('change', caixa)
}

function caixa() {
    marcados.push(this.value)
    container.innerHTML = marcados
}