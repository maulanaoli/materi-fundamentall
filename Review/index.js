var x = "";

for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= 10 - i; j++) {
    x += " ";
  }
  for (let k = 1; k <= i; k++) {
    x += "a";
  }
  x += "+" + "\n";
}
console.log(x);
/*var hasil = "";
for (var i = 0; i < 10; i++) {
  hasil += "*";

  for (var j = 0; j < i; j++) {
    hasil += "*";
  }
  hasil += "\n";
}
console.log(hasil);*/
