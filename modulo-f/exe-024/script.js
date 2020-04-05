function parimp(n) {
    let res
    
    if (n % 2 == 0) {
        res = 'par'
    } else {
        res = 'ímpar'
    }

    return res
}

let res = parimp(10)

console.log(res)