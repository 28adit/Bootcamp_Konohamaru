//exercise15 Mengelompokkan Hewan

function groupAnimals(animals) { // fungsi groupAnimals, argument animals
  var namaAkhir = [] // var namaAkhir sama dengan array kosong

// membuat array kosong.
// melakukan looping pertama.
// membuat array sesuai kata awal kalimat
// menghilangkan kancil
  for ( var i = 0; i < animals.length; i++) { // i sama dengan 0, i lebih kecil dari panjang argument, true, i ditambah satu
    //namaAkhir.push([]);
    
    var animalA = [] // var animalA sama dengan array kosong
    var animalC = [] // var animalC sama dengan array kosong
    var animalK = [] // var animalK sama dengan array kosong
    var animalU = [] // var animalU sama dengan array kosong
    
    for ( var j = 0; j < animals.length; j++) { // var j sama dengan 0, j lebih kecil dari argument panjang animal. true, j ditambah satu
      if( animals[j][0] === 'u') { // jika argument animals loop j index 0 sama dengan 'u'
        animalU.push(animals[j]) // maka animalU. di push animals index loops j
      }else if(animals[j][0] === 'a') { // jika argument animals loops j index 0 sama dengan 'a'
        animalA.push(animals[j]) // maka animalA, di push animals loops j
      } else if( animals[j][0] === 'c' ) { // jika argument animals loops j index 0 sama dengan 'c'
        animalC.push(animals[j]) // maka animalC di push animals. loops j
      } else if( animals[j][0] === 'k' && animals[j][1] ==='u') { // jika argument loops j index 0 sama dengan 'k' dan animals loops j index satu sama dengan 'u'
        animalK.push(animals[j]) // maka animalK di push animals loops j
      } 
    }
  }
  namaAkhir.push(animalA) // var namaAkhir di push animalA
  namaAkhir.push(animalC) // var namaAkhir di push animalC
  namaAkhir.push(animalK) // var namaAkhir di push animalK
  namaAkhir.push(animalU) // var namaAkhir di push animalU
  return namaAkhir // Mengembalikan value namaAkhir
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]