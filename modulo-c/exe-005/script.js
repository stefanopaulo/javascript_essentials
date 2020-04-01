var p1 = document.getElementsByTagName('p')[1]

document.write(p1.innerHTML)

p1.style.color = 'blue'

var title = document.getElementById('titulo')

title.innerHTML = "Seja Bem Vindo!"

title.style.background = 'tomato'
title.style.color = '#fff'
title.style.width = '300px'
title.style.height = '300px'

var msg = document.querySelector('div.msg')

msg.innerHTML = 'Selecionado por Seletor'