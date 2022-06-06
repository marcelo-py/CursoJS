function calcular() {
    let numero = Number(document.getElementById('ntabuada').value)
    let tab_res = document.getElementById('tab')

    cont = 1
    tab_res.innerHTML = ''
    
    do {
        let novo_item = document.createElement('option')
        novo_item.text = `${numero} X ${cont} = ${numero*cont}`
        novo_item.value = `tab${cont}`
        tab_res.appendChild(novo_item)
        cont ++
    } while (cont <= 10)
}