let num = [5, 8, 2, 9, 3]

// for (let i = 0; i < num.length; i++) {
//     console.log(`i${i}: ${num[i]}`)
// }

for (let n in num) {
    console.log(`i[${n}]: ${num[n]}`)
}

console.log(num.indexOf(9))