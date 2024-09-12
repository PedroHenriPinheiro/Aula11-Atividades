const atv4 = [1, 2, 3, 4, 5, 6]

const quadradoAtv4 = atv4.map(numero => numero * numero)

quadradoAtv4.forEach((quadradoAtv4, index) => {
    console.log(`${atv4[index]} -> ${quadradoAtv4}`);
})

console.log("\n Desmonstração for...of:");
for (const numero of atv4) {
    console.log(`${numero} = ${numero ** 2}`);
}