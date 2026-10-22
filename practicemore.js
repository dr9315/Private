// const arr = ["indra","endra","zendra","sendra","oendra"];

// // 1. Tambahkan "tes" di akhir TANPA push/splice → pakai arr[arr.length]
// // 2. Ganti SEMUA yang mengandung huruf "i" jadi kapital → loop + if
// // 3. Buat array baru berisi nama yang panjangnya > 5 → loop + if + push

// arr[arr.length] = "tes"; // push manual

// // no 2
// for ( let i =0; i<arr.length;i++) { // looping lanjutan untuk masuk huruf kapital
//     if (arr[i].includes("i")) {
//         arr[i] = arr[i].toUpperCase();
//     }
// }
// console.log(arr) // hasil

// // no 3

// const arr2 = ["Trump Vance", "Putina", "Dmitry","ely"]

// const Saring = []
// for (let i =0;i<arr2.length;i++) {
//     if (arr2[i].length > 5) {
//         Saring.push(arr2[i])
//     }
// }

// console.log(Saring)







// const angka = [4, 17, 8, 23, 11, 6, 30, 2];

// // 1. Jumlahkan semua angka → hasil: 101
// let indikator = 0
// for (let i = 0; i<angka.length;i++) {
//     indikator += angka[i]
// }
// console.log(indikator)
// // 2. Buat array baru: hanya angka genap
// const dataAngka = [4,6,8,10,12,14,16,23,25]
// let hasilSaring =[]
// for (let i = 0; i<dataAngka.length;i++) {
//     if (dataAngka[i] % 2 === 0 ) {
//         hasilSaring.push(dataAngka[i])
//     }
 
// }
// console.log(hasilSaring)

// 3. Cari angka terbesar (tanpa Math.max)
// const myNumber = [3156,395,36921,4297189431289]
// let angkaTerbesar = 0
// for (let i =0; i<myNumber.length;i++) {
//     if (myNumber[i] > angkaTerbesar) {
//         angkaTerbesar = myNumber[i]
//     } 
// }
// console.log(angkaTerbesar)

// 4. Hitung berapa angka yang > 10

// const array = [3960,974621]

// let detector = []
// for (let i=0 ;i<array.length;i++) {
//     if (array[i] > 10) {
//         detector.push(array[i])
        
//     }
    
// }
// console.log(detector)
//     console.log(`jumlah angka yang melampaui angka 10 sebanyak ${detector.length} angka`)

//  kunci answer

// const angka = [4, 17, 8, 23, 11, 6, 30, 2];
// let hitung = 0; // Penampung jumlah (number), bukan array

// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] > 10) {
//         hitung++; // <-- Cukup tambah 1 setiap kali ketemu
//     }
// }

// // Print di LUAR loop
// console.log(`Jumlah angka yang > 10 ada ${hitung} buah`);




// let total = 0;
// const angka = [2, 4, 6];

// for (let i = 0; i < angka.length; i++) {
//     total = total + angka[i];
//     angka[i] = angka[i] * 2;
// }

// console.log(total); // 2
// console.log(angka); // 


// part 1 moment 
// const nilaiKelas =  [80, 65, 90, 70, 55, 100];

// let total = 0
// let lulus = 0

// for (let i =0;i<nilaiKelas.length; i++) {
//     total += nilaiKelas[i]
//     if (nilaiKelas[i] >= 70) {
//         lulus++
//     }
// }

// console.log(`Total ${total}, lulus ${lulus}`)


// penerapan function part 2 
// function analisisNilai(arrNilai) {
//     let total = 0;
//     let lulus = 0;

//     for (let i = 0;i<arrNilai.length;i++) {
//         total += arrNilai[i]
//         if (arrNilai[i] >= 70) {
//             lulus++
//         }
       
//     }
//     let avg = total/arrNilai.length
//     return {
//         total, avg,lulus
//     }
// }

// console.log(analisisNilai([80, 65, 90, 70, 55, 100]))

// const a = [1, 2, 3];
// const b = a; 
// b.push(4);
// console.log(a); 


function kaliDua(angka) {
    angka = angka * 2; 
    return angka;
}

let nilai = 10;

console.log(nilai);
console.log(kaliDua(nilai))


function cariAngka(arr) {
    let hasil = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            hasil.push(arr[i]);
        }
    }
    return hasil;
}

console.log(cariAngka([5, 8, 11, 14]));