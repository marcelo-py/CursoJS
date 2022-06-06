function contar() {
    var inicial = document.getElementById('contarde')
    var final = document.getElementById('atenumero')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    res.innerHTML = ''

    var cont = Number.parseInt(inicial.value)
    while (cont <= final.value) {
        var novatag = document.createElement('span')
        res.appendChild(novatag)
        novatag.innerHTML = `${cont}| `
        cont += Number.parseInt(passo.value)
    }
}