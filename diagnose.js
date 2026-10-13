// // Kasus A: Uji Memori
// const barangA = { nama: "Oli Mesin", stok: 5 };
// const barangB = barangA;
// const barangC = { ...barangA };

const { spec } = require("node:test/reporters");

// barangB.stok = 10;
// barangC.stok = 99;

// console.log("Stok A:", barangA.stok); // Berapa angkanya? 10
// console.log("Stok B:", barangB.stok); // Berapa angkanya? 10
// console.log("Stok C:", barangC.stok); // Berapa angkanya?  99

// // Kasus B: Uji Traversal Nested
// const logGudang = {
//   gudangId: "GDG-BARAT",
//   petugas: { nama: "Hendra", shift: "Malam" },
//   catatan: [
//     { barangId: 101, jumlah: 3 },
//     { barangId: 102, jumlah: 8 }
//   ]
// };

// // Ambil angka '8' dari struktur logGudang di atas dalam satu baris kode:
// const ambilJumlah = logGudang.catatan[1].jumlah; 
// console.log("Hasil ambil:", ambilJumlah); // hasil nya 8 


// const pesananList = [
//     { id: 1, menu: "Kopi Tubruk", harga: 10000, status: "Pending" },
//     { id: 2, menu: "Roti Bakar",  harga: 15000, status: "Pending" },
//     { id: 3, menu: "Es Teh",      harga: 5000,  status: "Pending" }
//   ];
  
//   // 1. Eksekusi Hapus ID: 2
//   const hasilHapus = pesananList.filter(item => item.id !== 2);
//   console.log("HASIL FILTER (Tanpa ID 2):", hasilHapus);
  
//   // 2. Eksekusi Update ID: 1
//   const hasilUpdate = pesananList.map(item => 
//     item.id === 1 ? { ...item, status: "Selesai" } : item
//   );
//   console.log("HASIL MAP (ID 1 Selesai):", hasilUpdate);

const menuList = [
    { id: 10, nama: "Kopi Tubruk", harga: 10000 },
    { id: 20, nama: "Roti Bakar",  harga: 15000 },
    { id: 30, nama: "Es Teh",      harga: 5000 }
  ];

  const pemisahan = menuList.filter(item => item.id ===20).harga
  console.log(pemisahan)

  const specific = menuList.find(item => item.id ===20).harga
  console.log(specific)

//   referebnce vs value 

let a = 10;
let b = a; // b membuat fotokopi angka 10 sendiri
b = 99;    // b diubah

console.log(a); // Tetap 10! a tidak terpengaruh sama sekali.

// masalah 1: ketika anda malas berulang kali render () terus 
// vue menciptakan solusi nya memakai ref/reactive 

// 1. Sumber data tunggal (State di RAM)
let keranjang = [
  { id: 1, nama: "Kopi", lunas: false },
  { id: 2, nama: "Roti", lunas: true }
];

// 2. Fungsi tunggal penggambar layar
function render() {
  const container = document.getElementById("daftar");
  container.innerHTML = keranjang.map(item => `
    <li>
      ${item.nama} - ${item.lunas ? "LUNAS" : "BELUM"}
      <button onclick="hapusItem(${item.id})">Hapus</button>
      <button onclick="toggleLunas(${item.id})">Ubah Status</button>
    </li>
  `).join("");
}

// 3. Tombol cuma bertugas mengubah array, lalu panggil render()
function hapusItem(id) {
  keranjang = keranjang.filter(item => item.id !== id);
  render(); // Layar otomatis sinkron dengan data terbaru
}

function toggleLunas(id) {
  keranjang = keranjang.map(item => 
    item.id === id ? { ...item, lunas: !item.lunas } : item
  );
  render();
}

