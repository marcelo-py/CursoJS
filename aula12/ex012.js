var hora = new Date().getHours()

console.log(`Hora atual é ${hora}Hrs`)

if (hora < 12){
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else{
    console.log('Boa noite')
}