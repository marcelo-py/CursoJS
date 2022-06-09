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
            caixas[0].style.background = 'red'
            caixas[1].style.background = 'red'
            caixas[2].style.background = 'red'
            res.innerHTML = 'X Ganhou na primeira linha'
        } else if (caixas[3].innerHTML == 'X' && caixas[4].innerHTML == 'X' && caixas[5].innerHTML == 'X') {
            caixas[3].style.background = 'red'
            caixas[4].style.background = 'red'
            caixas[5].style.background = 'red'
            res.innerHTML = 'X Ganhou na segunda linha'
        } else if (caixas[6].innerHTML == 'X' && caixas[7].innerHTML == 'X' && caixas[8].innerHTML == 'X'){
            caixas[6].style.background = 'red'
            caixas[7].style.background = 'red'
            caixas[8].style.background = 'red'
            res.innerHTML = 'X Ganhou na terceira linha'
        } else if (caixas[0].innerHTML == 'O' && caixas[1].innerHTML == 'O' && caixas[2].innerHTML == 'O') {
            caixas[0].style.background = 'green'
            caixas[1].style.background = 'green'
            caixas[2].style.background = 'green'
            res.innerHTML = 'O Ganhou na primeira linha'
        } else if (caixas[3].innerHTML == 'O' && caixas[4].innerHTML == 'O' && caixas[5].innerHTML == 'O') {
            caixas[3].style.background = 'green'
            caixas[4].style.background = 'green'
            caixas[5].style.background = 'green'
            res.innerHTML = 'O Ganhou na segunda linha'
        } else if (caixas[6].innerHTML == 'O' && caixas[7].innerHTML == 'O' && caixas[8].innerHTML == 'O') {
            caixas[6].style.background = 'green'
            caixas[7].style.background = 'green'
            caixas[8].style.background = 'green'
            res.innerHTML = 'O Ganhou na terceira linha'
        }
        
        if (caixas[0].innerHTML == 'X' && caixas[3].innerHTML == 'X' && caixas[6].innerHTML == 'X') {
            caixas[0].style.background = 'red'
            caixas[3].style.background = 'red'
            caixas[6].style.background = 'red'
            res.innerHTML = 'X Ganhou na primeira coluna'
        } else if (caixas[1].innerHTML == 'X' && caixas[4].innerHTML == 'X' && caixas[7].innerHTML == 'X') {
            caixas[1].style.background = 'red'
            caixas[4].style.background = 'red'
            caixas[7].style.background = 'red'
            res.innerHTML = 'X Ganhou na segunda coluna'
        } else if (caixas[2].innerHTML == 'X' && caixas[5].innerHTML == 'X' && caixas[8].innerHTML == 'X') {
            caixas[2].style.background = 'red'
            caixas[5].style.background = 'red'
            caixas[8].style.background = 'red'
            res.innerHTML = 'X Ganhou na terceira coluna'
        } else if (caixas[0].innerHTML == 'O' && caixas[3].innerHTML == 'O' && caixas[6].innerHTML == 'O') {
            caixas[0].style.background = 'green'
            caixas[3].style.background = 'green'
            caixas[6].style.background = 'green'
            res.innerHTML = 'O Ganhou na primeira coluna'
        } else if (caixas[1].innerHTML == 'O' && caixas[4].innerHTML == 'O' && caixas[7].innerHTML == 'O') {
            caixas[1].style.background = 'green'
            caixas[4].style.background = 'green'
            caixas[7].style.background = 'green'
            res.innerHTML = 'O Ganhou na segunda coluna'
        } else if (caixas[2].innerHTML == 'O' && caixas[5].innerHTML == 'O' && caixas[8].innerHTML == 'O') {
            caixas[2].style.background = 'green'
            caixas[5].style.background = 'green'
            caixas[8].style.background = 'green'
            res.innerHTML = 'O Ganhou na terceira coluna'
        }
    }
    if (marcados.length == 9 && res.innerHTML.length == 0) {
        res.innerHTML = 'Sem vencedor!'
    }
    
}
