const nilai = [70,80,90] 

function tambahPoinBonus(grade) {
    return grade +5
}

let dataBaru = []
for (let i =0 ; i<nilai.length;i++) {
    dataBaru.push(tambahPoinBonus(nilai[i]))
}
console.log(dataBaru)


// cara property

const dataBaruMap = nilai.map(tambahPoinBonus)
console.log(dataBaruMap)

//  cara arrow

const dataBaruArrow = nilai.map((grade) => grade + 5)
console.log(dataBaruArrow)