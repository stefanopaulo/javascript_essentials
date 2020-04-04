var inicio = document.querySelector('#ini')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
var res = document.querySelector('#res')
var msg = document.querySelector('#msg')
var btn = document.querySelector('.btn')

function contar() {
    res.innerHTML = ''

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0) {
        msg.innerHTML = 'Impossível Contar!'
    } else if (p <= 0){
        alert('[Erro] Impossível Contar com o Passo MENOR ou igual a ZERO. Considerando Passo 1.')
        msg.innerHTML = 'Contando...'
        for (var c = i; c <= f; c++) {
            res.innerHTML += `${c} 👉 `
        }
        res.innerHTML += ' 🏁'
    } else {
        msg.innerHTML = 'Contando...'
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += ' 🏁'
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += ' 🏁'
        }
    }

    inicio.value = ''
    fim.value = ''
    passo.value = ''
}

btn.addEventListener('click', contar)