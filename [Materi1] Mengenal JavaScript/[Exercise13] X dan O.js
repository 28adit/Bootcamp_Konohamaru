//[Exercise13] Logic Challenge - X dan O

//Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function Cari(kata){

var z = kata.length;
var x = 0;
var o = 0;
for(var i = 0; i < z; i++){
  if (kata[i] == 'x'){
    x = x +1;
  } else if(kata[i] == 'o'){
    o = o +1;
  }
}

if (x == o){
  console.log('true');
} else{
  console.log('false');
}
}

Cari('xoxoxo'); //true
Cari('oxooxo'); //false
Cari('oxooxo'); //false
Cari('xxxooo'); //true
Cari('xoxooxxo'); //true