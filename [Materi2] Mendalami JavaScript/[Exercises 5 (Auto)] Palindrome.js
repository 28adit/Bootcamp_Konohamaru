//exercise5 Logic Challenge - Palindrome

function palindrome(kata) {
  var hasilKata = ''; //teks kosong untuk membalikan kata
  for (var i = kata.length-1; i>=0; i--){
    hasilKata += kata[i];
    //kata[i] nilai i yang di arraykan atau di kembalikan 
    // kata.length panjang nilai kata
    //  jika ingin membalikan kata function kata di berikan panjang nilainya di kurang 1 dan variabel fadh di inkrementkan
  }
   return hasilKata === kata;
   // nilai yang di kembalikan true atau false
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false