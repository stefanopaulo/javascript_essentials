function fatorial(n) {
    let fat = 1;

    for (let i = n; i > 1; i--) {
        fat *= i
    }

    return fat
}

let f = fatorial(5)

console.log(f)