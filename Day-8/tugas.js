var positif = 0;
var negatif = 0;

function SumFn(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] >= 0) {
      positif += x[i];
    } else if (x[i] < 0) {
      negatif += x[i];
    }
  }
  return (hasil = [negatif, positif]);
}
//console.log(SumFn([1, 9, -8, -7, 10, -20]));
