var video = document.getElementsByTagName('video')[0]
var button = document.getElementsByTagName('button')[0]
var btnsair = document.getElementsByTagName('button')[1]
button.style.padding = '20px'
button.style.background = 'green'
button.style.fontWeight = 'bold'
button.style.position = 'absolute'
button.style.top = '46%'
button.style.left = '46%'
video.style.margin = 'auto'


btnsair.style.padding = '20px'
btnsair.style.background = 'green'
btnsair.style.fontWeight = 'bold'

btnsair.style.position = 'absolute'
btnsair.style.top = '70%'
btnsair.style.left = '45%'
function play() {
    video.style.display = "block"
    video.play()
    button.style.display = 'none'
    btnsair.style.display = 'block'
}

function sair() {
    document.body.style.background = 'black'
    button.style.display = 'none'
    video.style.display = 'none'
    btnsair.style.display = 'none'
    video.pause()
    
    alert('Mundo deletado!')
}