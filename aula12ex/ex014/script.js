function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    var hora =  new Date().getHours()
    var minutos = new Date().getMinutes()
    msg.innerHTML = `SÃ£o ${hora} horas e ${minutos} minutos. `

    if (hora < 12) {
        msg.innerHTML += '<strong>Bom Dia!</strong>'
        imagem.src = 'bomdia.jpg'
        document.body.style.background = '#efa37b'
        document.title = 'Bom Dia! ð'
    } else if (hora < 18){
        msg.innerHTML += '<strong>Boa Tarde!</strong>'
        imagem.src = 'boatarde.jpg'
        document.body.style.background = '#fdd195'
        document.title = 'Boa Tarde! âï¸'
    } else {
        msg.innerHTML += '<strong>Boa Noite!</strong>'
        imagem.src = 'boanoite.jpg'
        document.body.style.background = '#102643'
        document.title = 'Boa Noite! ð'
    }
}
