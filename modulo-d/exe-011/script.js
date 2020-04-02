var btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    var nac = document.getElementById('nac').value
    var res = document.getElementById('res')

    if (nac != 'Brasil') {
        res.innerHTML = `<p><strong>${nac}</strong>: Nacionalidade Estrangeira</p>`
    } else {
        res.innerHTML = `<p><strong>${nac}</strong>: Nacionalidade Brasileira</p>`
    }
})