function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        // Bom Dia
        img.src = `foto-manha.png`
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        // Boa Tarde
        img.src = `foto-tarde.png`
        document.body.style.background = '#b9846f'
    } else {
        // Boa Noite
        img.src = `foto-noite.png`
        document.body.style.background = '#515154'
    }
}