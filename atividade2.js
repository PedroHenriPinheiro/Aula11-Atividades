const atv2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const paresAtv2 = atv2.map(numero => numero % 2 === 0)

const paresAtv2Mostrar = atv2.filter(numero => numero % 2 === 0)

console.log(atv2);

console.log(paresAtv2);

console.log(paresAtv2Mostrar);