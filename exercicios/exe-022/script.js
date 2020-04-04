var num = document.querySelector('#num')
var res = document.querySelector('#res')
var btn = document.querySelector('.btn')

var opt

function tabuada() {
    var n = Number(num.value)

    for (var i = 1; i <= 10; i++) {
        opt = document.createElement('option')
        opt.textContent = `${n} x ${i} = ${n * i}`
        res.appendChild(opt)
    }
}

btn.addEventListener('click', tabuada)