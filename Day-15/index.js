// 1. kandang = 1000
//setiap bulan, 20% dari bebek
//setiap bulan,  bebek yamg tersedia berlipat ganda
//berapa bebek yang ada setelah n bulan

hitungBebek = x => {
  var bebek = 1000;

  return totalbebek * x;
};
//console.log(hitungBebek(3));

function babyshark() {
  firstBait = [
    "baby shark",
    "mommy shark",
    "daddy shark",
    "grandma shark",
    "grandpa shark"
  ];
  var doo = " doo doo doo doo doo doo";
  var hasil = "";
  for (i = 0; i < firstBait.length; i++) {
    for (j = 0; j < 3; j++) {
      hasil += firstBait[i] + doo + "\n";
    }
    hasil += firstBait[i] + "\n";
  }
  return hasil;
}
// console.log(babyshark());

var tes = ["a", "t", "g", "c"];
var tes1 = ["t", "a", "c", "g"];

function dna(x) {
  hasil = tes1[tes.indexOf(x)];
  return hasil;
}
console.log(dna("g"));
