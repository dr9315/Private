const sqlite3 = require("sqlite3").verbose();

// ":memory:" artinya database cuma hidup di RAM selama script berjalan
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  // 1. Buat Tabel Induk (pelanggan)
  db.run(`
    CREATE TABLE pelanggan (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT NOT NULL
    )
  `);

  // 2. Buat Tabel Anak (pesanan) yang menampung ID milik pelanggan
  db.run(`
    CREATE TABLE pesanan (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pelanggan_id INTEGER NOT NULL,
      menu TEXT NOT NULL,
      harga INTEGER NOT NULL,
      FOREIGN KEY (pelanggan_id) REFERENCES pelanggan (id) 
    )
  `);
  // references pelanggan (id) dari tabel pelanggan dibutuhkan agar Mencegah Data Hantu
  // Jika kamu hanya menulis kolom pelanggan_id INTEGER tanpa aturan REFERENCES,
  //  kolom itu cuma dianggap angka biasa. Siapa
  //  pun bisa memasukkan pesanan dengan pelanggan_id = 999, 
  // padahal pelanggan nomor 999 tidak pernah ada.

  // 3. Masukkan 2 orang pelanggan
  db.run(`INSERT INTO pelanggan (nama) VALUES ('Budi')`);  // ID otomatis: 1
  db.run(`INSERT INTO pelanggan (nama) VALUES ('Siti')`);  // ID otomatis: 2

  // 4. Masukkan pesanan (perhatikan angka di kolom pelanggan_id)
  // Budi (ID: 1) pesan dua barang:
  db.run(`INSERT INTO pesanan (pelanggan_id, menu, harga) VALUES (1, 'Kopi Tubruk', 10000)`);
  db.run(`INSERT INTO pesanan (pelanggan_id, menu, harga) VALUES (1, 'Roti Bakar', 15000)`);

  // Siti (ID: 2) pesan satu barang:
  db.run(`INSERT INTO pesanan (pelanggan_id, menu, harga) VALUES (2, 'Es Teh Manis', 5000)`);

  // 5. Pembuktian: Ambil data gabungan pakai JOIN
  const queryGabungan = `
    SELECT 
      pesanan.id AS id_pesanan,
      pelanggan.nama AS nama_pembeli,
      pesanan.menu,
      pesanan.harga
    FROM pesanan
    JOIN pelanggan ON pesanan.pelanggan_id = pelanggan.id
  `;

  db.all(queryGabungan, [], (err, rows) => {
    if (err) {
      console.error("Eror:", err.message);
    } else {
      console.log("Hasil Relasi Tabel (JOIN):");
      console.table(rows); // Pakai console.table agar tampil seperti tabel rapi di terminal
    }
  });
});

db.close();