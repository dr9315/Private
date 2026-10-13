const daftarTransaksi = [
    { id: "TRX-01", menu: "Kopi Tubruk", nominal: 12000, status: "LUNAS" },
    { id: "TRX-02", menu: "Roti Bakar",  nominal: 15000, status: "BATAL" },
    { id: "TRX-03", menu: "Es Teh Manis",nominal: 5000,  status: "LUNAS" },
    { id: "TRX-04", menu: "Kentang",     nominal: 18000, status: "PENDING" },
    { id: "TRX-05", menu: "Cireng",      nominal: 10000, status: "LUNAS" }
  ];

//   let totalOmset = 0;

//   for (let i = 0 ; i < daftarTransaksi.length; i++) {
//     if (daftarTransaksi[i].status === "LUNAS") {
//         totalOmset += daftarTransaksi[i].nominal
//     }
//   }

//   console.log("Total omset Manual:", totalOmset)

// const totalHOF = daftarTransaksi
// .filter(item => item.status === "LUNAS")
// .reduce((celengan, item) => celengan + item.nominal,0)
  
// console.log("Totam omsety hof", totalHOF)

// Kita bikin fungsi saringan sendiri pakai for loop tradisional:
// function saringSendiri(arrayAsal, fungsiAturan) {
//     const hasil = [];
  
//     for (let i = 0; i < arrayAsal.length; i++) {
//       const item = arrayAsal[i];
      
//       // Mesin yang mengeksekusi fungsiAturan untuk setiap kamar [i]
//       if (fungsiAturan(item) === true) {
//         hasil.push(item);
//       }
//     }
  
//     return hasil;
//   }
  
//   // 3. FUNGSI TERPISAH (SOP Pemeriksaan Mandiri)
//   function cekStatusLunas(item) {
//     return item.status === "LUNAS";
//   }
  
//   // 4. Eksekusi: Masukkan NAMA fungsinya saja ke dalam parameter
//   const transaksiLunas = saringSendiri(daftarTransaksi, cekStatusLunas);
  
//   console.log(transaksiLunas);

// callback

// 1. Ini FUNGSI PENERIMA (Mesin Utama)
function prosesAngka(angka, aksi) {
    // 'aksi' di sini hanyalah variabel kosong penampung fungsi
    const hasil = aksi(angka); // saya membaca nya sebagai kalidua(5) lalu secara langkah ia akan kembali ke baris kalidua baru beres terus lempar balik lagi ke prosesangka bagian cosnole.log(hasil)
    console.log("Hasil akhir:", hasil); // begitu juga tambahSeratus(5) 
  }
  
  // 2. Ini FUNGSI CALLBACK (Modul Terpisah)
  function kaliDua(x) {
    return x * 2;
  }
  
  function tambahSeratus(x) {
    return x + 100;
  }
  
  // 3. EKSEKUSI
  prosesAngka(5, kaliDua);        // Hasil akhir: 10
  prosesAngka(5, tambahSeratus);  // Hasil akhir: 105

  function ubahTeks (nama, pengubah) {
    const hasil = pengubah(nama)
    console.log(hasil)
  }

  function tambahHalo(teks) {
    return "Halo," + teks 
  }

  function jadiBintang(teks) {
    return "***" + teks + "***" 
  }

  ubahTeks("daniel", tambahHalo)
  ubahTeks("daniel", jadiBintang)


  // 1. Logika substitusi tunggal yang barusan kamu pahami:
function periksaNama(nama, aturan) {
    return aturan(nama);
  }
  
  // 2. Sekarang kita pasang perulangan loop di dalamnya:
  function periksaBanyakNama(daftarNama, aturan) {
    const hasil = [];
    for (let i = 0; i < daftarNama.length; i++) {
      // Mesin melakukan substitusi yang persis sama, tapi berulang kali:
      if (aturan(daftarNama[i]) === true) {
        hasil.push(daftarNama[i]);
      }
    }
    return hasil;
  }
  
  // 3. Aturan uji mandiri:
  function apakahAwalanD(teks) {
    return teks.startsWith("D");
  }
  
  // 4. Eksekusi:
  const kumpulan = ["Daniel", "Budi", "Deni"];
  console.log(periksaBanyakNama(kumpulan, apakahAwalanD)); // ["Daniel", "Deni"]