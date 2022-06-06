function calcular() {
    var numero = document.getElementById('ntabuada')
    var res = document.getElementById('res')
    
    res.innerHTML = ''
    res.innerHTML = `<h5>Tabuada do ${numero.value}</h5> `
    for(var cont = 1; cont<=10; cont++) {
        var novatag = document.createElement('div')
        novatag.setAttribute('class', 'row-calculo')
        var res_calculo = Number(numero.value) * cont
        
        novatag.innerHTML += `${numero.value} X ${cont} = ${res_calculo}`
        res.appendChild(novatag)
    }
}
