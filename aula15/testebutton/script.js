for (let c=1; c <= 5; c++) {
    var btn = document.createElement('button')
    btn.setAttribute('class', 'btn')
    btn.setAttribute('value', `botão${c}`)
    btn.innerHTML = `BOTÃO ${c}`
    document.body.append(btn)
}
var vlr_btn = document.querySelectorAll('button.btn')
var array = []
for (var c = 0; c < vlr_btn.length; c++) {
    vlr_btn[c].addEventListener('click', analisar)
}

function analisar() {
    array.push(this.value)
    var nelement = document.createElement('div')
    nelement.innerHTML = array
    document.body.appendChild(nelement)
}