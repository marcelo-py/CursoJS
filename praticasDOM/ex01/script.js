

function analisar(){
    var calendario = document.querySelectorAll('#calendario td')
    var data1 = document.getElementsByTagName('input')[0]
    var data2 = document.getElementsByTagName('input')[1]
    dia1 = Number(data1.value[data1.value.length-2]+data1.value[data1.value.length-1])
    dia2 = Number(data2.value[data2.value.length-2]+data2.value[data2.value.length-1])
    var div = document.createElement('div')
    document.body.appendChild(div)

    c = dia1
    while (dia2 != calendario[c].innerHTML) {
        calendario[c+1].style.background = 'red'
        c++
    }
}

function addEventos(){
    var btn = document.getElementsByTagName('button')[0]
    btn.addEventListener('click', analisar)
}
window.addEventListener('load', addEventos)