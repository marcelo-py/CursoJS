var elemento = document.getElementById('txtelement')
var res = document.querySelector('div#res')
var array = []

function add() {
    if (array.includes(elemento.value) == false) {
        array.push(elemento.value)
    }
}

function ver() {
    res.innerHTML = array
}