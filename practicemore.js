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


// function kaliDua(angka) {
//     angka = angka * 2; 
//     return angka;
// }

// let nilai = 10;

// console.log(nilai);
// console.log(kaliDua(nilai))


// function cariAngka(arr) {
//     let hasil = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             hasil.push(arr[i]);
//         }
//     }
//     return hasil;
// }

// console.log(cariAngka([5, 8, 11, 14]));

// ==========================================
// LANGKAH 1: Buat fungsi-fungsi rumus (Callback)
// ==========================================

// // Rumus A: Diskon 10%
// function diskonMember(harga) {
//     return harga * 0.10;
//   }
  
//   // Rumus B: Diskon tetap Rp 20.000
//   function voucherPromo(harga) {
//     return 20000;
//   }
  
//   // ==========================================
//   // LANGKAH 2: Buat fungsi pemroses utama (Higher-Order Function)
//   // ==========================================
  
//   /**
//    * Fungsi ini bertugas memproses total bayar.
//    * @param {number} hargaAsli - Nilai uang belanja
//    * @param {function} aksiHitungDiskon - Fungsi callback yang dikirim dari luar
//    */
//   function prosesTransaksi(hargaAsli, aksiHitungDiskon) {
//     // Menjalankan fungsi callback yang diterima di dalam parameter
//     const jumlahPotongan = aksiHitungDiskon(hargaAsli);
//     const totalBayar = hargaAsli - jumlahPotongan;
  
//     return totalBayar;
//   }
  
//   function diskonUlangTahun (harga) {
//     return harga * 0.5
// }
//   // ==========================================
//   // LANGKAH 3: Jalankan kode
//   // ==========================================
  
//   // Transaksi 1: Menggunakan callback 'diskonMember'
//   // Perhatikan: kita tulis 'diskonMember' TANPA tanda kurung ()
//   const transaksi1 = prosesTransaksi(100000, diskonMember);
//   console.log("Total Transaksi 1:", transaksi1); // Output: 90000
  
//   // Transaksi 2: Menggunakan callback 'voucherPromo'
//   const transaksi2 = prosesTransaksi(100000, voucherPromo);
//   console.log("Total Transaksi 2:", transaksi2); // Output: 80000

//   const transaksi3 = prosesTransaksi(200000,diskonUlangTahun)
//   console.log(transaksi3)

// function prosesTransaksi(hargaAsli, aksiHitungDiskon) {

//     const jumlahPotongan = aksiHitungDiskon(hargaAsli)
//     const totalBayar = hargaAsli - jumlahPotongan;

//     return totalBayar
// }

// function transkasiBiasa (hargaAsli,potongan) {
//     return hargaAsli - potongan
// }
// function diskonUlangTahun(harga) {
//     return harga * 0.5
// }

// function diskonAbsolut(harga) {
//     return harga - 15000
// }



// const transaksi3 = prosesTransaksi(200000,diskonUlangTahun);
// console.log(transaksi3)

// // anonymous
// const transaksi4 = prosesTransaksi(50000,function(harga) {
//     return harga * 0.2
// });
// console.log("Cara B (Anonymous Function):", transaksi4);

// // arrow
// const transaksi5 = prosesTransaksi(50000,(harga) => harga * 0.2); 
// console.log("Cara C (Arrow Function):", transaksi5)

// // diskon 15k
// const transaksi6 = prosesTransaksi(80000,() => 15000)
// console.log(transaksi6) // cara arrow

// const transaksi7 = diskonAbsolut(80000)
// console.log(transaksi7) // cara eksplsiit

// const transaksi8 = transkasiBiasa(136000, 30000)
// console.log(transaksi8)

// ============================================================================
// 1. FUNGSI UTAMA (HIGHER-ORDER FUNCTION DENGAN DUKUNGAN INPUT FLEKSIBEL)
// ============================================================================

// /**
//  * Menghitung total transaksi akhir setelah dikurangi potongan harga.
//  * Fungsi ini mendukung dua jenis input diskon: angka langsung ATAU fungsi callback.
//  * 
//  * @param {number} hargaAsli - Nilai nominal barang (contoh: 100000).
//  * @param {number|function} aturanDiskon - Angka langsung (nominal) atau fungsi rumus diskon.
//  * @returns {number} Nilai akhir yang harus dibayarkan.
//  */
// function hitungTotalTransaksi(hargaAsli, aturanDiskon) {
//     let nilaiPotongan = 0;
  
//     // Cek apakah aturanDiskon berupa fungsi (Callback)
//     if (typeof aturanDiskon === "function") {
//       // Jalankan rumus fungsi untuk mendapatkan nilai potongannya
//       nilaiPotongan = aturanDiskon(hargaAsli);
//     } 
//     // Jika aturanDiskon berupa angka langsung (Nominal biasa)
//     else if (typeof aturanDiskon === "number") {
//       nilaiPotongan = aturanDiskon;
//     } 
//     // Penanganan jika input tidak valid (bukan angka, bukan fungsi)
//     else {
//       console.warn("Format diskon tidak valid, diskon dianggap 0.");
//       nilaiPotongan = 0;
//     }
  
//     // Hitung total akhir
//     const totalBayar = hargaAsli - nilaiPotongan;
  
//     return totalBayar;
//   }
  
//   // ============================================================================
//   // 2. CONTOH-CONTOH FUNGSI RUMUS (CALLBACK RESMI)
//   // Aturan: Callback selalu mengembalikan NILAI POTONGAN, bukan harga akhir.
//   // ============================================================================
  
//   // Rumus A: Diskon Ulang Tahun (50%)
//   function diskonUlangTahun(harga) {
//     return harga * 0.5;
//   }
  
//   // Rumus B: Diskon Member VIP (10%)
//   function diskonMember(harga) {
//     return harga * 0.1;
//   }
  
//   // ============================================================================
//   // 3. PENGUJIAN DAN PENERAPAN DI BERBAGAI KASUS
//   // ============================================================================
  
//   // Kasus 1: Menggunakan fungsi terpisah (Sangat mudah dibaca oleh pemula)
//   const transaksi1 = hitungTotalTransaksi(200000, diskonUlangTahun);
//   console.log("Kasus 1 (Fungsi Terpisah 50%):", transaksi1); // Output: 100000
  
//   // Kasus 2: Menggunakan Arrow Function ringkas untuk diskon 20%
//   const transaksi2 = hitungTotalTransaksi(50000, (harga) => harga * 0.2);
//   console.log("Kasus 2 (Arrow Function 20%):", transaksi2); // Output: 40000
  
//   // Kasus 3: Kasus transaksi8 milikmu! (Kirim angka langsung 30000)
//   // Tidak perlu lagi () => 30000, cukup kirim angka 30000 secara alami
//   const transaksi3 = hitungTotalTransaksi(136000, 30000);
//   console.log("Kasus 3 (Angka Langsung 30rb):", transaksi3); // Output: 106000
  
//   // Kasus 4: Transaksi tanpa diskon sama sekali
//   const transaksi4 = hitungTotalTransaksi(75000, 0);
//   console.log("Kasus 4 (Tanpa Diskon):", transaksi4); // Output: 75000


// ==========================================
// LANGKAH 1: Fungsi Rumus Sederhana
// ==========================================

/**
//  * Menghitung potongan diskon ulang tahun (50%).
//  * @param {number} harga - Nilai barang yang akan dihitung diskonnya.
//  * @returns {number} Nominal potongan harga.
//  */
// function diskonUlangTahun(harga) {
//     return harga * 0.5;
//   }
  
//   // ==========================================
//   // LANGKAH 2: Eksekusi Manual di Luar (Tanpa Callback)
//   // ==========================================
  
//   // 1. Tentukan harga awal
//   const hargaBarang = 200000;
  
//   // 2. Jalankan rumus secara terpisah untuk mendapatkan angka potongan
//   // Di sini diskonUlangTahun(200000) menghasilkan angka murni: 100000
//   const potonganDidapat = diskonUlangTahun(hargaBarang);
  
//   // 3. Hitung bayar akhir dengan matematika biasa
//   const totalBayar = hargaBarang - potonganDidapat;
  
//   console.log("Harga Awal:", hargaBarang);       // 200000
//   console.log("Potongan:", potonganDidapat);     // 100000
//   console.log("Total Bayar:", totalBayar);       // 100000

// ==============================================================
// RUMUS: Sama-sama dipakai di kedua cara
// ==============================================================
// function diskonUlangTahun(harga) {
//     return harga * 0.5;
//   }
  
//   // ==============================================================
//   // CARA 1: Cara Manual (Yang Sudah Kamu Pahami 100%)
//   // ==============================================================
//   const harga1 = 200000;
//   const potongan1 = diskonUlangTahun(harga1); // menghasilkan 100000
//   const total1 = harga1 - potongan1;           // 200000 - 100000 = 100000
//   console.log("Cara Manual:", total1);
  
//   // ==============================================================
//   // CARA 2: Cara Mesin Pembungkus (Callback)
//   // Isinya SAMA PERSIS dengan 3 baris di Cara 1, hanya dibungkus fungsi!
//   // ==============================================================
  
//   /**
//    * Mesin kasir yang membungkus langkah-langkah di Cara 1.
//    * @param {number} hargaAsli - Sama seperti 'harga1' di Cara 1
//    * @param {function} aksiHitungDiskon - Sama seperti nama fungsi 'diskonUlangTahun'
//    */
//   function prosesTransaksi(hargaAsli, aksiHitungDiskon) {
//     // Baris ini sama persis dengan: diskonUlangTahun(harga1)
//     const jumlahPotongan = aksiHitungDiskon(hargaAsli);
  
//     // Baris ini sama persis dengan: harga1 - potongan1
//     const totalBayar = hargaAsli - jumlahPotongan;
  
//     return totalBayar;
//   }
  
//   // Menjalankan mesin kasir:
//   const total2 = prosesTransaksi(200000, diskonUlangTahun);
//   console.log("Cara Mesin (Callback):", total2);

// ==========================================
// 1. FUNGSI RUMUS (CALLBACK)
// ==========================================

/**
 * Menghitung diskon 50%.
 * @param {number} harga - Nilai harga yang akan dipotong.
 * @returns {number} Hasil potongan 50%.
 */
function diskonUlangTahun(harga) {
    console.log("-> [Langkah 3] diskonUlangTahun menerima angka:", harga);
    const potongan = harga * 0.5;
    console.log("-> [Langkah 4] diskonUlangTahun mengembalikan potongan:", potongan);
    return potongan;
  }
  
  // ==========================================
  // 2. FUNGSI PEMROSES UTAMA (HIGHER-ORDER FUNCTION)
  // ==========================================
  
  /**
   * Memproses transaksi belanja.
   * @param {number} hargaAsli - Angka nominal belanja (misal: 200000).
   * @param {function} aksiHitungDiskon - Alias untuk fungsi rumus yang dikirim dari luar.
   * @returns {number} Sisa yang harus dibayar.
   */
  function prosesTransaksi(hargaAsli, aksiHitungDiskon) {
    console.log("-> [Langkah 1] prosesTransaksi dimulai.");
    console.log("-> [Langkah 2] Memanggil fungsi alias aksiHitungDiskon dengan input:", hargaAsli);
  
    // Baris ini mengeksekusi fungsi yang dikirim (diskonUlangTahun)
    const jumlahPotongan = aksiHitungDiskon(hargaAsli);
  
    console.log("-> [Langkah 5] jumlahPotongan berhasil didapat:", jumlahPotongan);
  
    const totalBayar = hargaAsli - jumlahPotongan;
    console.log("-> [Langkah 6] totalBayar dihitung:", hargaAsli, "-", jumlahPotongan, "=", totalBayar);
  
    return totalBayar;
  }
  
  // ==========================================
  // 3. MENJALANKAN KODE
  // ==========================================
  
  const hasilAkhir = prosesTransaksi(200000, diskonUlangTahun);
  console.log("Hasil Akhir Transaksi:", hasilAkhir);