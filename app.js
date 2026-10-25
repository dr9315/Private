// 1. Data mentah inventaris
// const inventaris = [
//     { nama: "Ryzen 5700X", harga: 2750000, stok: 4 },
//     { nama: "RTX 3060", harga: 4350000, stok: 2 },
//     { nama: "RAM 32GB", harga: 1100000, stok: 5 },
//     { nama: "SSD 1TB", harga: 850000, stok: 10 }
//   ];
  
//   // 2. Tangkap elemen DOM
//   const wadahList = document.getElementById("list-barang");
//   const labelTotal = document.getElementById("nilai-aset");
  
//   // 3. Variabel penampung akumulasi total
//   let totalNilaiAset = 0;
  
//   // 4. Loop lurus: render teks dan hitung nominal sekaligus
//   for (let i = 0; i < inventaris.length; i++) {
//     const barang = inventaris[i];
  
//     // Hitung subtotal tiap jenis barang (harga x stok)
//     const subtotal = barang.harga * barang.stok;
//     totalNilaiAset = totalNilaiAset + subtotal;
  
//     // Buat tag <li> baru
//     const li = document.createElement("li");
//     li.textContent = barang.nama + " (Stok: " + barang.stok + ") - Nilai: Rp " + subtotal.toLocaleString("id-ID");
  
//     // Masukkan tag <li> ke dalam <ul>
//     wadahList.appendChild(li);
//   }
  
//   // 5. Tampilkan angka akumulasi akhir ke layar
//   labelTotal.textContent = "Rp " + totalNilaiAset.toLocaleString("id-ID");


// try 2 fail
// const containerList = document.getElementById("list-barang");
// const hitungTotal = document.getElementById("nilai-aset")

// let totalNilaiAset = 0;

// for (let i = 0; i< inventaris.length;i++) {
//     const barang = inventaris[i];

//     const subtotal = inventaris[i].harga * inventaris[i].stok;
//     totalNilaiAset = totalNilaiAset + subtotal;

//     const li = document.createElement("li");
//     li.textContent = barang.nama + " (Stok: " + barang.stok + ") - Nilai: Rp " + subtotal.toLocaleString("id-ID");

//     containerList.appendChild(li);

// }

// hitungTotal.textContent = "Rp " + totalNilaiAset.toLocaleString("id-ID")

// try 3

// ini mau keluarin daftar inventaris
//  sama hitung total valuasi aset


// const labelTotal = document.getElementById("nilai-aset")
// labelTotal.textContent = "5.000.000"

// const wadahList = document.getElementById("list-barang")

// const barisBaru = document.createElement("li");

// barisBaru.textContent = "Barang percobaan pertama"

// wadahList.appendChild(barisBaru)


// const namaKomponen = "Nvidia GeForce RTX 3060 ";
// const harga = 4350000;
// const statusKetersediaan = "Tersedia";

// const wadah = document.getElementById("list-barang")
// const item = document.createElement("li");
// item.textContent = namaKomponen   + statusKetersediaan + " Rp " + harga.toLocaleString("id-ID")
// wadah.append(item)

// const inventaris = [
//     { nama: "Ryzen 5700X", harga: 2750000, stok: 4 },
//     { nama: "RTX 3060", harga: 4350000, stok: 2 },
//     { nama: "RAM 32GB", harga: 1100000, stok: 5 },
//     { nama: "SSD 1TB", harga: 850000, stok: 10 }
//   ];

//   const hitungBtn = document.getElementById("btn-hitung")
//   let grandFinal = 0
// for (let i = 0 ;i <inventaris.length;i++) {
//     const hitung = inventaris[i].harga * inventaris[i].stok
//     grandFinal += hitung
// }

// const total = document.getElementById("total-aset")
// total.textContent = grandFinal

// hitungBtn.addEventListener("click", function() {
//     const total = inventaris.reduce(function (akumulator, item) {
//         return akumulator + (item.harga * item.stok);
//       }, 0); // 0 adalah angka awal (initial value) akumulator
    
// })






// console.log("test")
// let total = 0
// for (let i = 0 ;i < inventaris.length;i++) {
// const counting = inventaris[i].harga * inventaris[i].stok
// total += counting
// }
// console.log(total)

//   const button = document.getElementById("btn-hitung")
//   button.addEventListener("click" , function () {
//     return inventaris.harga * inventaris.stok
//   },0)



// 1. Data inventaris
const inventaris = [
    { nama: "Ryzen 5700X", harga: 2750000, stok: 4 },
    { nama: "RTX 3060", harga: 4350000, stok: 2 },
    { nama: "RAM 32GB", harga: 1100000, stok: 5 },
    { nama: "SSD 1TB", harga: 850000, stok: 10 }
  ];
  
  // 2. Tangkap tombol dan teks dari HTML
  const tombolHitung = document.getElementById("btn-hitung");
  const labelAset = document.getElementById("total-aset");
  
//   // 3. Pasang aksi ketika tombol diklik
//   tombolHitung.addEventListener("click", function () {
    
//     // Hitung total dengan reduce
//     const total = inventaris.reduce(function (akumulator, item) {
//       const subtotal = item.harga * item.stok;
//       return akumulator + subtotal;
//     }, 0);
  
//     // Tampilkan hasilnya ke layar
//     labelAset.textContent = "Rp " + total.toLocaleString("id-ID");
//   });

// PAKAI CARA EKSPLSIIT (GAUSAH DIPAKSA PAKE PROPERTY GA PERLU NGIDE DULU, LANCARIN)

tombolHitung.addEventListener("click", function() {
    let total = 0;

    for(let i = 0 ;i<inventaris.length;i++) {
        const Calculation = inventaris[i].harga * inventaris[i].stok
        total += Calculation
    }
    labelAset.textContent = "Rp " + total

})