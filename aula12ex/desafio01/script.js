function verificar() {
    var ano_atual = new Date().getFullYear()
    var ano_nascimento = document.getElementById('anonasc')
    var res = document.querySelector('div#res')
    var opsexo = document.getElementsByName('radiosex')
    var idade = ano_atual - ano_nascimento.value

    sexo = ''
    classe = ''
    if (ano_nascimento.value.length == 0 || Number(ano_nascimento.value) > ano_atual) {
        alert('Erro! digite um Ano válido.')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if (opsexo[0].checked) {
            sexo = 'Homem'
            if (idade <= 10) {
                classe = 'Criança'
                img.setAttribute('src', 'criançahomem.jpg')
            } else if (idade < 20) {
                classe = 'Jovem'
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade <= 50) {
                classe = 'Adulto'
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                classe = 'Idoso'
                img.setAttribute('src', 'velho.jpg')
            }
        } else if (opsexo[1].checked) {
            sexo = 'Mulher'
            if (idade <= 10) {
                classe = 'Criança'
                img.setAttribute('src', 'criançamulher.jpg')
            } else if (idade < 20) {
                classe = 'Jovem'
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade <= 50) {
                classe = 'Adulto'
                img.setAttribute('src', 'adultamulher.jpg')
            } else {
                classe = 'Idoso'
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos ${classe} ${sexo} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}