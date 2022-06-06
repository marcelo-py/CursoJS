function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        alert('Erro! faltam dados!')
    } else {
        res.innerHTML = 'Contando:' //isso zera pr laço for não recontar novamente
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo 0, iremos contar de 1 em 1')
            p = 1
        }
        if (i < f) {
            //crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //decrescente
            for (let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += '\u{1F4A5}'
    }
}