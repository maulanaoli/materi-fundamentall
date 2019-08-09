function repinclude(val, arr) {
  for (i = 0; i < arr.length; i++) {
    if (val == arr[i]) {
      return true;
    }
  }
  return false;
}

function repIndexOf(val2, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (val2 == arr[i]) {
      return i;
    }
  }
  return -1;
}

var arrayku = ["soekarno", "Habibie", "Megawati", "sby"];
//console.log(repinclude("sby", arrayku));
//console.log(repIndexOf("sby", arrayku));

function bebas() {
  function e() {
    return [7, 3, 2, [9, 4, 5, ["popok", "bertasbih"], 0]];
  }
  return e;
}
//console.log(bebas()()[3][3][0]);

//================== object =============
var mobil = {
  merek: "toyota",
  warna: "merah"
};
console.log(mobil);
