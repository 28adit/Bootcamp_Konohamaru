//[Exercise3] Menggunakan If Else
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. 
// Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

var nama = 'Danu'
var peran = 'Tabib'

if (peran == '' && nama == ''){
console.log("Nama harus diisi");
}
else if (peran == ''){
  console.log("Halo ",nama,", Pilih peranmu untuk memulai game")
}
else {
  console.log("Selamat datang di dunia Proxytia, ",nama)
  if(peran =="Ksatria"){
   console.log("Halo ",peran,nama,", kamu dapat menyerang dengan senjatamu") 
  }
  else if (peran == "Tabib"){
  console.log("Halo ",peran,nama,", kamu akan membantu teman kamu yang terluka") 
  }
  else{
    console.log("Halo ",peran,nama,", ciptakan keajaiban yang membantu kemenanganmu") 
  }
}

// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"