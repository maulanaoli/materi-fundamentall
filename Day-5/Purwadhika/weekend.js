function hapusVokal(nyanyi) {
  return nyanyi.replace(/[aiueo]/gi, "");
}

function parkir(_jam) {
  tarifPertama = 2000 * 2;
  totalJam = _jam - 2;
  hasil = tarifPertama + totalJam * 500;
  return hasil;
}
function ganjilGenap(angka) {
  hasil = angka % 2;
  if (hasil == 0) {
    angka = "angka genap";
  } else {
    angka = "angka ganjil";
  }
  return angka;
}
function maxNum(satu, dua, tiga) {
  Math.max(satu, dua, tiga);
  if (Math.max == satu) {
    satu = "angka terbesar adalah" + satu;
  } else if (Math.max == dua) {
    dua = "angka terbesar = " + dua;
  } else {
    tiga = "angka terbesar = " + tiga;
  }

  return satu, dua, tiga;
}
function filterstring(f) {
  return f.filter(Number);
}
function removeChar(_remove) {
  var _remove;

  return _remove.slice(1, _remove.length - 1);
}
console.log(hapusVokal("galau", 7, 2, "doraemon", "meja", "leci", 9));
console.log(parkir(4));
console.log(ganjilGenap(9));
console.log(maxNum(17, 5, 42));
console.log(filterstring(["galau", 7, 2, "doraemon", "meja", "leci", 9]));
console.log(removeChar("Gak kuat akutuh"));
