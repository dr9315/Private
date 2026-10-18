// const motor = {
//     merk: "Honda",
//     tahun: 2022,
//     warna:"hITAM"
// };

// console.log(motor["merk"])


// add 
// const motor=  {
//     merk: "Honda",
//     cc: 125
// };

// motor.cc = 150;
// console.log(motor.cc)

// motor.warna = "Hitam"
// console.log(motor)


// delete

// const user = {
//     id:1,
//     nama: "Daniel",
//     tokenRahasia:  "xyz123"
// }

// delete user.tokenRahasia;
// console.log(user)


// IN

// const laptop = {
//     ram: "16GB",
//     ssd: "512GB"
// };

// // console.log("ram" in laptop)
// // console.log("vga" in laptop)

// // cara alternatif
// console.log(laptop.hasOwnProperty("ram"))
// console.log(laptop.hasOwnProperty("vga"))


// const akun = {
//     username: "daniel",
//     biodata: {
//         kota: "jakarta",
//         hobi:["Coding","gaming"]
//     }
// };

// console.log(akun["biodata"])

// const rumahA = { warna: "Putih", nomor: 5 };

// // Bongkar isi rumahA, bangun rumah baru yang terpisah:
// const rumahB = { ...rumahA }; 

// rumahB.warna = "Merah"; // Cat rumah baru

// console.log(rumahA.warna); // Tetap "Putih" (Aman!)
// console.log(rumahB.warna); // "Merah"

// // cara biar semua data nya bisa diubah

// const userA = {
//     nama: "Daniel",
//     alamat: { kota: "Jakarta" }
//   };
  
//   // Buat wadah baru untuk tingkat luar DAN wadah baru untuk 'alamat'
//   const userB = {
//     ...userA,
//     alamat: {
//       ...userA.alamat,
//       kota: "Bandung" // Timpa kotanya di sini
//     }
//   };
  
//   console.log(userA.alamat.kota); // Tetap "Jakarta" (Aman!)
//   console.log(userB.alamat.kota); // "Bandung"

// //    atau carap ling mantap bisa pakia built in function
// const userA = {
//     nama: "Daniel",
//     alamat: { kota: "Jakarta" }
//   };
  
//   // Gandakan seluruh tingkatan secara otomatis sampai ke akar-akarnya:
//   const userB = structuredClone(userA);
  
//   userB.alamat.kota = "Bandung";
  
//   console.log(userA.alamat.kota); // Tetap "Jakarta"
//   console.log(userB.alamat.kota); // "Bandung"

// // function object methods 

// const kalkulatorRingkas = {
//     angkaDasar: 10,
  
//     // Sintaks ringkas (Sama persis cara kerjanya):
//     tambahDua() {
//       return 10 + 2;
//     }
//   };



// const user = {
//     nama: "Daniel",
//     sapa: () => {
//       return "Halo, " + this.nama; // RUSAK!
//     }
//   };
  
//   console.log(user.sapa()); // Output: Halo, undefined


// const user = {
//     nama: "Daniel",
//     sapa:  function() {
//       return "Halo, " + this.nama; // Berhasil
//     }
//   };
  
//   console.log(user.sapa()); // Output: Halo, Daniel

// function toObject(value) {
//     if (value === null || value === undefined) {
//       return {};
//     }
  
//     if (typeof value === "object") {
//       return value;
//     }
  
//     return Object(value);
//   }
  
//   console.log(toObject(null));
  
//   console.log(toObject(true));
  
//   console.log(toObject([1, 2, 3]));

// const num = 42;
// const numObj = Object(num); // Creates an object wrapper for the number

// console.log(numObj);
// console.log(typeof numObj); // "object"


// const konfigurasi = {
//     "server-name": "production-01",
//     port:8080,
//     maxKoneksi:100,
// }

// const inputUser= "port"

// console.log(konfigurasi["server-name"])
// console.log(konfigurasi[inputUser])



// if (!konfigurasi.hasOwnProperty("ssl")) {
//     console.log("SSL Tidak tersedia")

// }

// else {
//     console.log("SSL Tersedia")
// }



// deep extraction

// const responServer = {
//     status:200,
//     payload: {
//         pengguna: {
//             id:"usr-99",
//             nama : "daniel",
//             perangkat:[
//                 {jenis: "pc", ip:"192.168.1.5"},
//                  {jenis: "HP", ip: "192.168.1.10" }
//             ]
    
//         }
//     }
// }

// console.log(responServer.payload.pengguna.perangkat[1].ip)
// console.log(responServer.payload.admin?.kontak?.email)

// memory address & immutability

// const barangA = {
//     sku:"BRG-01",
//     nama : "keyboard TKL",
//     harga: 500000
// };

// const barangB = {...barangA}
// barangB.harga = 650000
// console.log(barangA.harga)
// console.log(barangB.harga)

//  add
// const add = barangA.status ="Ready"
// console.log(barangA)

//  delete property
// delete barangA.harga
// console.log(barangA)

// edit
// const edit = barangA.harga = 31961
// console.log(barangA)







// const laptop = {
//     ram: "16GB",
//     ssd: "512GB"
// };

// // console.log("ram" in laptop)
// // console.log("vga" in laptop)

// // cara alternatif
// console.log(laptop.hasOwnProperty("ram"))
// console.log(laptop.hasOwnProperty("vga"))


// const keranjangBelanja = {
//     pemilik:"Daniel",
//     DiskonKode : "Diskon10",
//     totalBelanja: 100000,

//         terapkanDiskon(potongan){
//         this.totalBelanja -= potongan
        
//     }
    
// }
// keranjangBelanja.terapkanDiskon(15000)
// console.log(keranjangBelanja.totalBelanja)

// delete keranjangBelanja.DiskonKode 
// delete keranjangBelanja.terapkanDiskon
// console.log(keranjangBelanja)


// const dashboard = {
//     metrik_1: 1500,
//     metrik_2: 3200,
//     metrik_3: 8900
//   };
  
//   const idPilihan = 2;
//   const gabung = "metrik_" + idPilihan
  
// console.log(gabung)
// console.log(dashboard.metrik_2) // bisa
// console.log(dashboard[gabung]) // tpai kalau dashboard.gabung kena undefiend, Saya rasa karena ada nya ketidak konsisten di aspek string "metrik" otomatis JS tidak kenal
// // solusi nya jadi pakai bracket notation (Setelah saya trial eror)

// // hitugn frekuesni kunci dinamis 

// const daftarBuah = ["apel", "jeruk", "apel", "mangga", "apel", "jeruk"];
// const penghitung = {};

// for (let i = 0; i < daftarBuah.length; i++) {
//     const buah = daftarBuah[i]

//     if (penghitung[buah] !== undefined ){
//         penghitung[buah] += 1
//     } else {
//         penghitung[buah]=1
//     }
// }

// console.log(penghitung)


// const keranjang = [
//     { nama: "Mousepad", harga: 150000, qty: 2 },
//     { nama: "Keycaps", harga: 300000, qty: 1 },
//     { nama: "Kabel Type-C", harga: 50000, qty: 3 }
//   ];
  
//   let totalBayar = 0;
  
//   // Tugas:
//   // Jalankan satu loop for biasa.
//   // Di setiap putaran, hitung (harga * qty) lalu akumulasikan ke totalBayar.

//   for (let i = 0; i< keranjang.length;i++) {
//     totalBayar += keranjang[i].harga * keranjang[i].qty
//   }
//   console.log(totalBayar)

// const daftarOrder = [
//     {
//       orderId: "TRX-001",
//       pelanggan: "Daniel",
//       items: ["Kopi", "Roti"]
//     },
//     {
//       orderId: "TRX-002",
//       pelanggan: "Budi",
//       items: ["Susu"]
//     },
//     {
//       orderId: "TRX-003",
//       pelanggan: "Siti",
//       items: ["Teh", "Donat", "Air Mineral"]
//     }
//   ];
  
//   // Target Output di terminal:
//   // TRX-001 (Daniel): Kopi
//   // TRX-001 (Daniel): Roti
//   // TRX-002 (Budi): Susu
//   // TRX-003 (Siti): Teh
//   // TRX-003 (Siti): Donat
//   // TRX-003 (Siti): Air Mineral

// for (let i = 1; i <= 2; i++) {
//     console.log("Putaran Luar i:", i);
  
//     for (let j = 1; j <= 3; j++) {
//       console.log("  --> Eksekusi Dalam j:", j);
//     }
//   }

// const daftarOrder = [
//     {
//       pelanggan: "Daniel",
//       items: ["Mouse", "Keyboard"] // Array di dalam objek
//     },
//     {
//       pelanggan: "Budi",
//       items: ["Monitor"]
//     }
//   ];

//   // 1. Loop Luar: Mengurai setiap pelanggan
// for (let i = 0; i < daftarOrder.length; i++) {
//     const order = daftarOrder[i];
//     console.log("Pelanggan:", order.pelanggan);
  
//     // 2. Loop Dalam: Mengurai array 'items' milik pelanggan aktif tersebut
//     for (let j = 0; j < order.items.length; j++) {
//       const barang = order.items[j];
//       console.log("- Barang:", barang);
//     }
//   }

//   const timDev = [
//     {
//       nama: "Daniel",
//       skill: ["JavaScript", "Node.js"]
//     },
//     {
//       nama: "Alex",
//       skill: ["Python", "Docker", "Linux"]
//     }
//   ];
  
//   // Tugas:
//   // Buat nested loop untuk mencetak format berikut ke terminal:

//   for (let i = 0; i < timDev.length; i++) { 
//     const orang = timDev[i]; // Pegang 1 orang (misal: Daniel)
    
//     // Loop dalam: telusuri array skill milik "orang" tersebut
//     for (let j = 0; j < orang.skill.length; j++) {
//       const namaSkill = orang.skill[j]; // Ambil skill ke-j ("JavaScript", lalu "Node.js")
      
//       console.log(orang.nama + " menguasai: " + namaSkill);
//     }
//   }


  // Daniel menguasai: JavaScript
  // Daniel menguasai: Node.js
  // Alex menguasai: Python
  // Alex menguasai: Docker
  // Alex menguasai: Linux


  // Kita cuma punya SATU objek orang, tanpa array luar
// const programmer = {
//     nama: "Daniel",
//     hobi: ["Coding", "Baca Buku", "Ngopi"]
//   };
  
//   for (let i = 0; i< programmer.hobi.length;i++) {
//     console.log(programmer.nama + " memiliki hobi: " + programmer.hobi[i]);  }

//   console.log("test")
//   // Target: Cetak semua hobi Daniel satu per satu

// const programmer = {
//     nama: "Daniel",
//     hobi: ["Coding", "Baca Buku", "Ngopi"]
//   };
  
//   // Loop berputar berkali-kali menyorot programmer
//   for (let i = 0; i < programmer.hobi.length; i++) {
//     console.log("Menyorot:", programmer.nama, "->", programmer.hobi[i]);
//   }
  
//   // Periksa wujud programmer setelah loop selesai:
//   console.log("Kondisi setelah loop:");
//   console.log(programmer);




// const timDev = [
//     {
//       nama: "Daniel",
//       skill: ["JavaScript", "Node.js"]
//     },
//     {
//       nama: "Alex",
//       skill: ["Python", "Docker", "Linux"]
//     }
//   ];

//   console.log(timDev[0].nama)
//   console.log(timDev[0].skill[1])
//   console.log(timDev[1].skill[2])

//   for (let i = 0; i < timDev.length; i++) {

//     const namaOrang = timDev[i].nama;
//     const kemampuan = timDev[i].skill;
  
//     console.log(namaOrang + " Punya "  + " skill: " + kemampuan);
//   }

// const daftarPemain = [
//     {
//       nama: "Budi",
//       game: ["Valorant", "Apex"]
//     },
//     {
//       nama: "Siti",
//       game: ["Minecraft", "Roblox"]
//     }
//   ];

//   for (let i = 0; i<daftarPemain.length;i++) {
//     for (let j =0; j<daftarPemain[i].game.length;j++) {
//         const IndividuName = daftarPemain[i].nama
//         const gameName = daftarPemain[i].game[j]
//         console.log(IndividuName + " Main " + gameName)

//     }


//   }

//   const tokoBuku = [
//     {
//       kategori: "Komik",
//       judul: ["Naruto", "One Piece", "Bleach"]
//     },
//     {
//       kategori: "Teknologi",
//       judul: ["Clean Code", "JavaScript Dasar"]
//     }
//   ];

//   for (let i = 0 ; i < tokoBuku.length;i++) {
//     for (let j =0 ; j<tokoBuku[i].judul.length;j++) { // [0] lalu [1] [2] dst, harus nya begini logika nya 
//         const klasifikasi = tokoBuku[i].kategori
//         const title = tokoBuku[i].judul[j] // lewat indeks [0,0] [1,1] dst nya, seterus nya dilemapr ke console.log kumulatif
//         console.log("Kategori " + klasifikasi + ": " +  title)
//     }
//   }

//   const daftarBelanja = [
//     {
//       kategori: "Elektronik",
//       harga: [150000, 350000]
//     },
//     {
//       kategori: "Dapur",
//       harga: [20000, 50000, 30000]
//     }
//   ];

//   let totalBiaya = 0;

//   for (let i =0; i<daftarBelanja.length;i++) {
//     for(let j =0 ; j<daftarBelanja[i].harga.length;j++) {
//         const Classification = daftarBelanja[i].kategori
//         const pay = daftarBelanja[i].harga[j] 
//         console.log(`Barang ${Classification} : Rp ${pay}`)

//     }
//   }

// const gudang = [
//     {
//       rak: "A1",
//       stok: [10, 0, 25]
//     },
//     {
//       rak: "B2",
//       stok: [0, 5, 12, 0]
//     }
//   ];

//   for (let i =0;i<gudang.length;i++) {
//     for (let j = 0; j<gudang[i].stok.length;j++) {
//         const storage = gudang[i].rak
//         const jumlahBarang = gudang[i].stok[j]

//         if (jumlahBarang === 0) {
//             console.log(`Stok habis di Rak ${storage}, dengan jumlah barang : ${jumlahBarang}`)
//         }
//     }
//   }


// const daftarMenu = [
//     {
//       kategori: "Kopi",
//       varian: [
//         { nama: "Espresso", harga: 20000 },
//         { nama: "Latte", harga: 30000 }
//       ]
//     },
//     {
//       kategori: "Makanan",
//       varian: [
//         { nama: "Croissant", harga: 25000 },
//         { nama: "Toast", harga: 15000 }
//       ]
//     }
//   ];

//   for (let i =0 ; i<daftarMenu.length;i++) {
//     for(let j = 0; j<daftarMenu[i].varian.length;j++) {
//         const classification = daftarMenu[i].kategori
//         const price = daftarMenu[i].varian[j].harga
//         const nama = daftarMenu[i].varian[j].nama
//         console.log(`Menu: ${nama} | Harga: ${price} (Kategori : ${classification})}`)
//     }
//   }

// const user = {
//     nama: "Daniel",
//     role : "Developer",
//     isAktif : true,
//     poin : 100
// };

// console.log(user.nama)
// console.log(user["role"])

// user.poin = 150;
// user.lokasi = "Jakarta"

// user.sapa = function() {
//     return `Halo, nama saya ${this.nama} sebagai ${this.role}`
// }

// console.log(user.sapa())
// console.log(user)

// Kumpulan data produk
// const daftarProduk = [
//     { id: 1, nama: "Keyboard Mechanical", harga: 450000, stok: 5 },
//     { id: 2, nama: "Mouse Wireless", harga: 150000, stok: 0 },
//     { id: 3, nama: "Monitor 24 Inch", harga: 1800000, stok: 3 }
//   ];
  
//   // 1. Mengakses object tertentu berdasarkan index array
//   console.log(daftarProduk[0].nama); // Output: Keyboard Mechanical
  
//   // 2. Menambahkan data baru menggunakan .push()
//   daftarProduk.push({
//     id: 4,
//     nama: "Headset Gaming",
//     harga: 320000,
//     stok: 8
//   });
  
//   // 3. Iterasi (Looping) untuk membaca seluruh isi data
//   for (let i = 0; i < daftarProduk.length; i++) {
//     const item = daftarProduk[i];
//     const status = item.stok > 0 ? "Tersedia" : "Habis";
//     console.log(`[${item.id}] ${item.nama} - Rp${item.harga} (${status})`);
//   }


const daftarBuku = [

    {judul: "Pet Dog",penulis: "Marvin", halaman : 45},
    {judul: "Pet Cat", penulis : "Elvis", halaman : 59},
];

    daftarBuku.push (
    {judul:"pet lizard", penulis:"Melvin", halaman: 39}
)

for (let i = 0; i < daftarBuku.length;i++) {
    const { judul, penulis, halaman } = daftarBuku[i];
    // const key = daftarBuku[i]
    // const judul = key.judul;
    // const penulis = key.penulis;
    // const halaman = key.halaman

    // opsional
    // const judul = daftarBuku[i].judul;
    // const penulis = daftarBuku[i].penulis;
    // const halaman = daftarBuku[i].halaman;
    console.log(`Buku ${judul} ditulis oelh ${penulis} memiliki ${halaman} halaman.`)
}