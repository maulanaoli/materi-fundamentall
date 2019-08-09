bulan = (n, p, d, t) => {
  bebek = n;
  persen = p / 100;
  i = 0;
  while (bebek <= t) {
    bebek = bebek + bebek * persen + d;
    i++;
  }
  return `bebek mencapai ${t} dalam ${i} bulan`;
};
console.log(bulan(1000, 5, 50, 1200));
console.log(bulan(1500000, 2.5, 10000, 2000000));

function odd(jumlah) {
  var arr = [];
  ganjil = -1;
  for (var i = 0; i < jumlah; i++) {
    arr[i] = [];
    for (j = 0; j <= i; j++) {
      ganjil += 2;
      arr[i].push(ganjil);
    }
  }
  return arr;
}
console.log(odd(5));
//nmr 3 blm slsai srry :D
