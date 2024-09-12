const atv1 = [50, 45, 67, 89, 10, 5]

const dobreAtv1 = atv1.map(numero => numero * 2)

dobreAtv1.forEach((dobreAtv1, index) => {
    console.log(`${atv1[index]} -> ${dobreAtv1}`);
})