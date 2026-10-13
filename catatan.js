// Cara manual destructruing 
const user = { id: 993, nama: "Andrew" };

const id = user.id;
const nama = user.nama;

// cara modern destructuring 
const user = { id: 993, nama: "Andrew" };

// Langsung ekstrak keluar:
const { id, nama } = user;

console.log(id);   // 993
console.log(nama); // "Andrew"

//  sintaks spread operator
const angka = [10, 20];
// Buat array baru, tebar isi lama, sisipkan angka baru di belakang
const angkaBaru = [...angka, 30]; // [10, 20, 30]

// update data objek

const barang = { id: 1, nama: "Kopi", harga: 10000 };

// Gandakan semua isi barang, tapi timpa harganya saja
const barangPromo = { ...barang, harga: 8000 };
// Hasil: { id: 1, nama: "Kopi", harga: 8000 }

// DOM

// 1. Ambil elemen DOM (Input, Button, Output)
const inputAngka = document.querySelector('#inputUser'); // Misal user ketik 5
const button = document.querySelector('#btnHitung');
const output = document.querySelector('#txtOutput');

// 2. Definisi fungsi (Abstraksi yang bersembunyi)
function hitung(angka) {
  console.log("Fungsi hitung mendeteksi angka:", angka); // Console log tersembunyi
  return angka * 2; 
}

// 3. Event Listener
button.addEventListener('click', () => {
  // Membaca apa yang diketik user saat tombol diklik
  let data = Number(inputAngka.value); // data menjadi angka 5
  
  // Terjadi substitusi: output.textContent = hitung(5);
  output.textContent = hitung(data); 
});



//  arrow syntax
const admins = users.filter(user => user.role === 'admin');


//  regular function
const admins = users.filter(function(user) {
    return user.role === 'admin';
  });