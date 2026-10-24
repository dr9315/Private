// 1. DATA HISTORIS: Simulasi pergerakan harga saham ASML
const dataASML = [
    { date: "Hari 1", close: 680 },
    { date: "Hari 2", close: 685 },
    { date: "Hari 3", close: 675 }, // Periode 3 hari pertama untuk acuan awal, nanti nya masuk ke parameter period = 3
    { date: "Hari 4", close: 690 }, // Menembus harga tertinggi (685) -> BUY!
    { date: "Hari 5", close: 695 },
    { date: "Hari 6", close: 660 }  // Jatuh drastis menembus harga terendah -> SELL!
  ];
  
  function runPriceBreakoutRobot(data, period = 3) {
    console.log("Robot Trading Kasus ASML");
    let position = "NONE";
  
    for (let i = period; i < data.length; i++) {
      // Ambil data lewat variabel N hari sebelumnya (slice dari array tersebut)
      const windowData = data.slice(i - period, i); // akumulasi pengambilan indeks object
      const closePrices = windowData.map(d => d.close); // ambil data dari object dataASML
  
      // Cari nilai Tertinggi & Terendah (Pakai Math.max/min) sesuai putaran yang dibutuhkan
      const highestHigh = Math.max(...closePrices); // terapkan spread operator
      const lowestLow = Math.min(...closePrices); // untuk data array 
  
      const currentPrice = data[i].close;
      const currentDate = data[i].date;
  
      // Logika Decision Robot (Moving Average Crossover)
      if (currentPrice > highestHigh && position === "NONE") {
        position = "LONG";
        console.log(`[${currentDate}] BUY ASML di $${currentPrice} (Tembus Tertinggi 3 Hari: $${highestHigh})`);
      } 
      else if (currentPrice < lowestLow && position === "LONG") {
        position = "NONE";
        console.log(`[${currentDate}] SELL ASML di $${currentPrice} (Tembus Terendah 3 Hari: $${lowestLow})`);
      }
    }
  }
  
  // Jalankan robot nya sesuai argument yang dibutuhkan untuk kebutuhan parameter fungsi
  runPriceBreakoutRobot(dataASML, 3);
  
  // [680,685,675] max 685 , min 675
  // [685, 675, 690] max 690 min 675
  //2 and 5 [675, 690, 695]  // Angka 685 dibuang, angka 695 masuk jadi max baru
  // contoh eksekusi pertama : data[3].close arti nya dia ambil 690 
  // otomatis 690 > 685 True , tapi di else if 690 < 675 false. Jadi hari ini buy dulu \
  
  // output nya 
  //[Hari 4] BUY ASML di $690 (Tembus Tertinggi 3 Hari: $685)
  //[Hari 6] SELL ASML di $660 (Tembus Terendah 3 Hari: $675)