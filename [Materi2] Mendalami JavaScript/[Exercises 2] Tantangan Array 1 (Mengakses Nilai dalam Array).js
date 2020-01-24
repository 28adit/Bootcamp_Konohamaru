//exercise2
function balikString(kata){
var dibalik = '';

for(var i = kata.length-1; i>=0; i--){
dibalik = dibalik + kata[i];
}
return dibalik;
}
console.log(balikString("Hello world!"));
//output
//"!dlrow olleH"