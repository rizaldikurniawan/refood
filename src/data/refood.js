const notesData = [
  {
      "Jenis": "Nasi Basi",
      "deskripsi": "Nasi basi merupakan nasi yang telah berbau dan warnanya telah berubah sehingga tidak layak untuk dikonsumsi.",
      "cara_pengolahan": "Pupuk dari Nasi Basi. Alat yang dibutuhkan: talenan, pisau, wadah atau baskom, toples atau wadah kecil, saringan, dan alat pengaduk. Bahan yang dibutuhkan: 500 ml air, 100 gr gula jawa, dan 200 gr nasi basi. Proses fermentasi: Siapkan wadah kecil, kepal nasi basi dan masukkan ke dalam wadah. Tutup wadah dan letakkan di tempat yang gelap selama 2-5 hari hingga nasi basi ditumbuhi jamur rizopus. Campurkan bahan: Siapkan baskom, masukkan 500 ml air, iris tipis gula jawa, dan larutkan dalam air. Masukkan nasi basi berjamur, aduk hingga rata. Masukkan campuran ke dalam botol 1,5 liter menggunakan corong. Diamkan 2-3 hari di tempat gelap. Gunakan pupuk dengan komposisi 100 ml pupuk organik dalam 10 liter air dan 50 ml gula jawa cair. Satu tanaman membutuhkan 200-300 ml pupuk organik cair."
  },
  {
      "jenis": "Kulit Pisang",
      "deskripsi": "Setelah mengonsumsi pisang, biasanya kulitnya dibuang begitu saja.",
      "cara_pengolahan": "Pupuk organik cair dari kulit pisang. Bahan: kulit pisang, gula pasir, air bersih, botol bekas. Langkah pembuatan: Bersihkan botol bekas. Haluskan kulit pisang dengan blender atau cincang halus. Masukkan gula pasir ke dalam botol dengan perbandingan 1 sendok: 250 ml. Larutkan gula dengan air. Masukkan kulit pisang halus ke dalam botol berisi larutan gula. Tambahkan air hingga batas leher botol. Tutup rapat dan diamkan 7-10 hari, buka tutup botol setiap hari untuk melepaskan gas. Pupuk dapat langsung digunakan setelah lebih dari 7 hari."
  },
  {
      "jenis": "Ampas Kopi",
      "deskripsi": "Kopi sering kali digunakan dalam berbagai olahan makanan, namun ampas kopi seringkali dibuang begitu saja.",
      "cara_pengolahan": "Scrub dari ampas kopi. Bahan: ampas kopi, minyak kelapa, garam, sedikit air, essential oil (opsional). Langkah-langkah: Keringkan ampas kopi di tempat terbuka atau di bawah sinar matahari. Siapkan wadah untuk mencampur bahan. Campurkan semua bahan hingga mencapai konsistensi yang diinginkan. Teteskan essential oil untuk memberi aroma pada scrub. Scrub siap digunakan. Simpan scrub di tempat kering dalam wadah kedap udara."
  },
  {
      "jenis": "Kulit Apel",
      "deskripsi": "Jika seseorang memakan apel, kebanyakan kulitnya akan dibuang, padahal kulit apel bisa diolah untuk dikonsumsi.",
      "cara_pengolahan": "Kerupuk panggang dari kulit apel. Cara membuat: Campur kulit apel dengan mentega cair dan gula kayu manis. Panggang hingga kecoklatan dan matang."
  },
  {
      "jenis": "Cangkang Telur",
      "deskripsi": "Cangkang telur yang sering kali dibuang setelah mengonsumsi telur dapat menyebabkan bertambahnya limbah makanan.",
      "cara_pengolahan": "Pupuk organik dari cangkang telur. Langkah-langkah: Bersihkan cangkang telur. Sterilkan dengan air panas. Keringkan dengan cara dijemur. Tumbuk hingga halus. Campur dengan air dalam botol bekas. Tambahkan gula jawa dan EM4 dengan perbandingan 1:1. Tutup botol dan kocok. Diamkan 10-14 hari untuk fermentasi, buka tutup botol sesekali untuk melepaskan gas. Alternatif: taburkan serpihan cangkang telur langsung di atas tanaman."
  },
  {
      "jenis": "Susu Basi",
      "deskripsi": "Susu yang telah disimpan terlalu lama hingga basi.",
      "cara_pengolahan": "Keju cottage dari susu basi. Cara membuat: Masak susu basi dalam panci ganda di atas air mendidih hingga terpisah menjadi whey dan dadih. Tambahkan cuka atau air lemon untuk memisahkan whey. Saring menggunakan handuk untuk menghilangkan whey. Simpan keju di lemari es selama beberapa jam. Tambahkan krim, garam, dan merica sesuai selera."
  },
  {
      "jenis": "Ampas Teh Hijau",
      "deskripsi": "Ampas yang tersisa setelah menyeduh teh hijau, kaya akan antioksidan dan zat-zat aktif lainnya yang bermanfaat untuk kulit.",
      "cara_pengolahan": "Masker dari ampas teh hijau. Cara membuat: Ambil dua kantong teh hijau bekas. Keluarkan ampas teh. Tambahkan 2-4 sendok makan madu dan sedikit jus lemon. Oleskan pada wajah dan tunggu 5-10 menit. Bilas dengan air hangat. Gunakan masker ini sekali atau dua kali seminggu."
  },
  {
      "jenis": "Kulit Wortel",
      "deskripsi": "Kulit tipis yang biasanya dibuang saat memotong wortel. Kaya akan serat dan nutrisi lainnya yang baik untuk kesehatan pencernaan dan kulit.",
      "cara_pengolahan": "Keripik wortel. Cara membuat: Iris tipis kulit wortel. Panggang di oven hingga kering. Tambahkan sedikit minyak zaitun dan rempah-rempah untuk rasa yang lebih menarik."
  },
  {
      "jenis": "Ikan Busuk",
      "deskripsi": "Ikan yang sudah mengalami proses pembusukan alami atau disengaja, biasanya menghasilkan rasa yang khas dan unik setelah diolah dengan bumbu dan rempah-rempah tertentu.",
      "cara_pengolahan": "Babutuk dari ikan busuk. Cara membuat: Buang isi perut ikan, rebus ikan busuk besar dan buang tulangnya. Haluskan bumbu: kunir, laos, sereh, kemiri, garam, asam daun kalamenyu, lombok merah, santan, dan gula. Campurkan bumbu dengan daging ikan. Rebus sambil diaduk hingga air mengering. Tambahkan daun asam kalamenyu saat hampir matang. Hasil akhir seperti abon basah."
  },
  {
      "jenis": "Biji dan Kulit Salak",
      "deskripsi": "Biji dan kulit salak yang telah dikumpulkan setelah mengonsumsi buah salak, kaya akan serat dan antioksidan yang baik untuk kesehatan.",
      "cara_pengolahan": "Kopi dan teh dari biji dan kulit salak. Cara membuat: Cuci biji dan kulit salak. Kecilkan ukuran menggunakan pisau dan gunting. Oven selama 30 menit untuk menghilangkan kadar air. Sangrai biji salak hingga aromanya keluar. Giling biji menjadi bubuk kopi. Giling kulit salak kering menjadi bubuk teh menggunakan blender."
  },
  {
      "jenis": "Kulit Bawang",
      "deskripsi": "Kulit yang biasanya dibuang saat memotong bawang putih, bawang merah, atau bawang bombay, kaya akan antioksidan dan flavonoid yang bermanfaat untuk kesehatan.",
      "cara_pengolahan": "Keripik kulit bawang. Cara membuat: Cuci bersih kulit bawang, keringkan. Letakkan dalam wadah untuk memanggang. Tambahkan olive oil dan sedikit garam, aduk rata. Panggang selama 10 menit pada suhu 200°C hingga renyah. Gunakan sebagai camilan atau topping."
  },
  {
      "jenis": "Kulit Jeruk",
      "deskripsi": "Kulit jeruk yang telah dipisahkan dari buahnya, mengandung minyak esensial yang dapat digunakan sebagai pembersih alami dan juga dapat diolah menjadi pupuk.",
      "cara_pengolahan": "Pembersih alami dari kulit jeruk. Cara membuat: Simpan kulit jeruk dalam toples kaca. Isi dengan cuka putih dan biarkan selama dua minggu. Saring cairannya. Campur air dengan cuka, perbandingan 2:1. Tuangkan ke dalam botol semprot untuk pembersih alami. Sisa kulit jeruk bisa dijadikan pupuk kompos."
  }
];

export default refood;