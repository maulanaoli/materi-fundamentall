deretbilangan = a => {
  var hasil = 0;
  totalHasil = [];
  for (var i = 1; i <= a; i++) {
    hasil += i;
    totalHasil.push(i);
  }

  return `${totalHasil.join("+") + "=" + hasil}  `;
};
//console.log(deretbilangan(10));

caesarCipher = (kata, angka) => {
  var alpabet = "abcdefghijklmnopqrstuvwxyz".split("");
  splited = kata.split("");

  for (var i = 0; i < splited.length; i++) {
    hasilidx = alpabet.indexOf(splited[i]);
    splited[i] = alpabet[hasilidx + angka];
  }
  return splited.join("");
};
console.log(caesarCipher("abc", 3));
