function verificar() {
    var ano = new Date().getFullYear()
    var nasc = window.document.getElementById('nascimento')
    var res = window.document.querySelector('div#res')

    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        window.alert('Erro! digite um ano válido.')
    } else {
        var sexf = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        var imagem_fundo = ''
        if (sexf[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'criançahomem.jpg')
                imagem_fundo = 'criançahomem.jpg'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
                imagem_fundo = 'jovemhomem.jpg'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
                imagem_fundo = 'adultohomem.jpg'
            } else {
                //idoso
                img.setAttribute('src', 'velho.jpg')
                imagem_fundo = 'velho.jpg'
            }
        } else if (sexf[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'criançamulher.jpg')
                imagem_fundo = 'criançamulher.jpg'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
                imagem_fundo = 'jovemmulher.jpg'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultamulher.jpg')
                imagem_fundo = 'adultamulher.jpg'
            } else {
                //idoso
                img.setAttribute('src', 'velha.jpg')
                imagem_fundo = 'velha.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

        document.body.style.backgroundImage = `url('${imagem_fundo}')`
    }
}

