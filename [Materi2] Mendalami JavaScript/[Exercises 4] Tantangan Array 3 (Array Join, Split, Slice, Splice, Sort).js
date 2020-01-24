//exrcise4
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(input){
  var spliceInput = input.splice(1,1,"Roman Alamsyah Elsharawy");
  var spliceInput2 = input.splice(2,1,"Provinsi Bandar Lampung");
  var getInput3 = input[3];
  var tgl = getInput3.split('/');
  var customTgl = getInput3.split('/');
  var spliceInput4 = input.splice(4,1,"Pria")
  var spliceInput5 = input.splice(5,1,"SMA Internasional Metro")
  console.log(input); // Array
  customTgl[1] = bulan(customTgl[1]);
  console.log(customTgl[1]); // Mei
  tgl.sort(function(a, b){return b-a});
  console.log(tgl);//[1982,21,05]
  console.log(getInput3.split('/').join('-'));
  var batasin = input[1].slice(0,15);
  console.log(batasin);
}

function bulan(bulan){
  switch(bulan){
    case '01' : return "Januari"; break;
    case '02' : return "Feb"; break;
    case '03' : return "Maret"; break;
    case '04' : return "April"; break;
    case '05' : return "Mei"; break;
    case '06' : return "Juni"; break;
    case '07' : return "Juli"; break;
    case '08' : return "Agustus"; break;
    case '09' : return "September"; break;
    case '10' : return "Oktober"; break;
    case '11' : return "November"; break;
    case '12' : return "Desember"; break;
    default   : return "Bulan2an"; break;
  }
}
// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * [1989, 21, 05]
//  * 21-05-1989
//  * Roman Alamsyah
//  */

