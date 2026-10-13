const express = require("express");
const app = express();

// WAJIB: Middleware agar server paham kiriman berformat JSON dari luar
app.use(express.json());

let daftarKopi = [
  { id: 1, nama: "Kopi Tubruk", harga: 10000 },
  { id: 2, nama: "Es Kopi Susu", harga: 18000 }
];

// 1. GET: Mengambil data
app.get("/api/kopi", (req, res) => {
  res.json(daftarKopi);
});

// 2. POST: Menerima data baru dari klien
app.post("/api/kopi", (req, res) => {
  const kopiBaru = {
    id: daftarKopi.length + 1,
    nama: req.body.nama,
    harga: req.body.harga
  };

  daftarKopi.push(kopiBaru); // Masukkan ke gudang array

  // Beri respon sukses (201 Created)
  res.status(201).json({
    pesan: "Kopi berhasil ditambahkan!",
    data: kopiBaru
  });
});

app.put("/api/kopi/:id", (req, res) => {
    // 1. Tangkap ID target dari URL (ubah jadi angka)
    const idTarget = Number(req.params.id);
  
    // 2. Cari kopi yang ID-nya cocok
    const kopiDitemukan = daftarKopi.find((kopi) => kopi.id === idTarget);
  
    if (!kopiDitemukan) {
      return res.status(404).json({ pesan: "Kopi tidak ditemukan" });
    }
  
    // 3. Timpa nilai lama dengan nilai baru dari req.body
    kopiDitemukan.nama = req.body.nama;
    kopiDitemukan.harga = req.body.harga;
  
    // 4. Kirim respon sukses
    res.json({
      pesan: "Data kopi berhasil diperbarui!",
      data: kopiDitemukan
    });
  });
  
  // 4. DELETE: Buang data berdasarkan ID di URL
  app.delete("/api/kopi/:id", (req, res) => {
    const idTarget = Number(req.params.id);
    daftarKopi = daftarKopi.filter((kopi) => kopi.id !== idTarget);
    res.json({ pesan: "Berhasil dihapus" });
  });

app.listen(5000, () => {
  console.log("Server menyala di http://localhost:5000");
});