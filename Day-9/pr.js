function Urutan(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  ganjil = arr[Math.round((arr.length - 1) / 2)];
  genap = arr[arr.length / 2 - 1];
  if (arr.length % 2 == 0) {
    tengah = [(genap + ganjil) / 2];
  } else {
    tengah = [ganjil];
  }

  return tengah;
}

console.log(Urutan([12, 1, 45, 14, 15, 90, 97, 96]));
