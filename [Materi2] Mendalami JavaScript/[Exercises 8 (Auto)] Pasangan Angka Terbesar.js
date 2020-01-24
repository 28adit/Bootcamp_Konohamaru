//exrecise8 Pasangan Angka Terbesar

function pasanganTerbesar(num) {
  var angka = [];
  var banding = 0;

  for (var i = 0; i <= num.toString().length-1; i++) {
    angka.push(num.toString()[i] + num.toString()[i+1]);
  }
  banding = angka.reduce(function(x,y) {
    return (x > y) ? x : y;
  });  
  return Number(banding);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99