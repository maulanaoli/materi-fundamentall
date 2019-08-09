var hasil = "";
var len = 5;

for (var i = 1; i <= 5; i++) {
  hasil += " *";
  for (var j = 5; j > i; j--) {
    hasil += " *";
  }
  hasil += "\n";
}
console.log(hasil);
