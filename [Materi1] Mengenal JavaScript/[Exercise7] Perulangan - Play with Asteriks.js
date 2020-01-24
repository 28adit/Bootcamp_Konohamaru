// [Exercise7] Looping
// Soal looping - asterisk ini memiliki 3 nomor.

// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk 
// menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

var rows1;
var counterRows1;

rows1 = 5;
counterRows1 = 0;

while (counterRows1<rows1) {
  console.log('*');
  counterRows1++;
}

//Output
//jika rows1 = 5
// *
// *
// *
// *
// *

//---------------------------------------------------------------------------------------------------------------------------

// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). 
// Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. 
// Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

var rows2 = 5;
var i=0;
while (i<rows2) {
  var asteriks = '*';
  var j = 1;
  while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}

//Output
// jika rows2 = 5
// *****
// *****
// *****
// *****
// *****

//---------------------------------------------------------------------------------------------------------------------------

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) 
// dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. 
// Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. 
// Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

var rows3 = 5;
var initial = 1;
var i = 0;

while (i<rows3) {
  var pyramid = '*';
  var j=0;
  while (j<i) {
    pyramid = pyramid +'*';
    j++;
  }
  console.log(pyramid);
  i++;
}

// Output
// jika rows3 = 5
// *
// **
// ***
// ****
// *****