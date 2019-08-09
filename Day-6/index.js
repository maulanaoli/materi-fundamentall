var arrItem = ["jeruk", "apel", "leci"];
var arrPrice = [3000, 7000, 10000];
function tambahItem(buah1, buah2) {
  var menu = "";
  arrItem.push(buah1);
  arrPrice.push(buah2);
  for (let i = 0; i < arrItem.length; i++) {
    menu += i + 1 + ". " + arrItem[i] + " Rp" + arrPrice[i] + "\n";
  }
}

//console.log(tambahItem("nangka", 20000));

function tampil(item) {
  x = kota.indexOf(item);
  console.log(kota[x] + kodePos[x]);
}
var kota = ["medan", "bandung", "jakarta", "palembang", "manado", "tangerang"];
var kodePos = [11, 12, 13, 14, 15, 16];
tampil("jakarta");
