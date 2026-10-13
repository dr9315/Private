const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3003;

// Middleware agar Express bisa membaca JSON dari req.body
app.use(express.json());

// 1. Hubungkan ke database fisik
const db = new sqlite3.Database("warung.db");

// 2. Pastikan tabel sudah ada saat server pertama kali start
db.run(`
  CREATE TABLE IF NOT EXISTS kopi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    harga INTEGER NOT NULL
  )
`);

// 3. GET /kopi -> Ambil semua menu dari database
app.get("/kopi", (req, res) => {
  db.all("SELECT * FROM kopi", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ status: "error", pesan: err.message });
    }
    // rows langsung dilempar ke client sebagai JSON
    res.json({
      status: "success",
      data: rows
    });
  });
});

// 4. POST /kopi -> Tambah menu baru ke database
app.post("/kopi", (req, res) => {
  const { nama, harga } = req.body;

  // Validasi input sederhana
  if (!nama || !harga) {
    return res.status(400).json({ status: "error", pesan: "nama dan harga wajib diisi" });
  }

  const query = "INSERT INTO kopi (nama, harga) VALUES (?, ?)";
  
  // Pakai function biasa agar this.lastID bisa diakses
  db.run(query, [nama, harga], function (err) {
    if (err) {
      return res.status(500).json({ status: "error", pesan: err.message });
    }

    res.status(201).json({
      status: "success",
      pesan: "Menu berhasil ditambahkan",
      data: {
        id: this.lastID,
        nama: nama,
        harga: harga
      }
    });
  });
});

// 5. Jalankan server
app.listen(PORT, () => {
  console.log(`Server warung aktif di http://localhost:${PORT}`);
});