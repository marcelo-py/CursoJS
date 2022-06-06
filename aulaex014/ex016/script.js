function contar() {
    var inicial = document.getElementById('contarde')
    var final = document.getElementById('atenumero')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    
    var cont = Number.parseInt(inicial.value)
    res.innerHTML = ''
    if (inicial.value.length == 0 || final.value.length == 0) {
        alert('O valor inicial e nem final não podem ficar vazios')
    } else if (passo.value.length == 0) {
        alert('Você não indicou os passou então vamos contar de 1 em 1')
        passo.value = 1
    }
    
    while (cont <= final.value) {
        var novatag = document.createElement('span')
        res.appendChild(novatag)
        novatag.innerHTML = `${cont}| `
        cont += Number.parseInt(passo.value)
    }
}