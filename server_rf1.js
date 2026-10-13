const sqlite3 = require ("sqlite3").verbose();

const db = new sqlite3.Database("warung.db", (err) => {
    if ( err) {
        console.error("Gagal membuat database:", err.message);
    } else {
        console.log("Database warung.db berhasil terhubung!")
    }
});

db.serialize (() => {
    db.run (`
      CREATE TABLE IF NOT EXISTS kopi (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT NOT NULL,
      harga INTEGER NOT NULL
        )
        `, (err) => {
            if (err) {
                console.error("Gagal membuat tabel:", err.message);

            }else {
                    console.log("Tabel kopi siap digunakan!")
                }
        });

        // db.run(
        //     `INSERT INTO kopi (nama, harga) VALUES (?, ?)`,
        //     ["Kopi Susu Gula Aren", 18000],
        //     function (err) {
        //       if (err) {
        //         console.error("Gagal insert:", err.message);
        //       } else {
        //         // this.lastID adalah ID otomatis yang dibuat oleh SQLite
        //         console.log(`Menu baru berhasil masuk dengan ID: ${this.lastID}`);
        //       }
        //     }
        //   );

          db.all(`SELECT * FROM kopi`, [], (err, rows) => {
            if (err) {
              console.error("Gagal membaca data:", err.message);
            } else {
              console.log("Isi tabel kopi saat ini:");
              console.log(rows);
            }
          });

});



// syntax untuk sqlite

// db.run("INSERT INTO kopi (nama, harga) VALUES (?, ?)", [nama, harga], function(err) {
//     if (err) return console.log(err.message);
//     console.log("ID data:", this.lastID);
//   });

//   db.all("SELECT * FROM kopi", [], (err, rows) => {
//     if (err) return console.log(err.message);
//     console.log(rows); // isinya: [ { id: 1, ... }, { id: 2, ... } ]
//   });

//   db.get("SELECT * FROM kopi WHERE id = ?", [1], (err, row) => {
//     if (err) return console.log(err.message);
//     console.log(row); // isinya langsung: { id: 1, nama: "...", harga: ... }
//   });