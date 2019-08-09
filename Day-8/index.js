var mobi = {
  warna: "merah",
  tipe: "sedan",
  plat: " b 123 cd",
  interior: {
    wangi: "lavender",
    jok: "kulir"
  }
};

var diriku = {
  nama: {
    depan: "maulana",
    belakang: "sholihin",
    lengkap: function() {
      var a = this.depan + this.belakang;
      return a;
    }
  },
  pekerjaan: "Rahasia",
  hobi: "ngerepotin orang"
};

class Human {
  constructor(a, b, c) {
    (this.nama = a), (this.pekerjaan = b), (this.hobi = c);
  }
}
var orang = new Human("bi llgates", "businessman", "jadi kaya");
console.log(orang);
