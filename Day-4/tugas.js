function bintang(a) {
  var x = "";
  for (let i = 0; i <= a - 1; i++) {
    for (let k = 0; k <= a - i; k++) {
      x += " ";
    }
    for (let j = 1; j <= i; j++) {
      x += " * ";
    }
    x += " * " + "\n";
  }

  return x;
}

//var d = new Date();

//console.log(d.getDate() + "-" + e.getMonth() + "-" + f.getFullYear());
var arr = ["fikri", "seto", "eric", "budi", "koceng", "naruto", "hayabusa"];
function tampil(barang) {
  for (var i = 0; i < barang.length; i++) {
    console.log(barang[i]);
  }
}

tampil(arr);
