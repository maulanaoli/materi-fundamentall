var jenisProgram = prompt(
  "MENU : \n1. Segitiga Siku - Siku\n2. Segitiga Sama kaki\n3. Belanja\n4. Exit"
);
if (jenisProgram == 1) {
  segitigaSiku = prompt("SEGITIGA SIKU - SIKU \n1. Siku Atas \n2. Siku Bawah");
  if (segitigaSiku == 1) {
    var baris;
    baris = prompt("Pilih baris (1 - 10)");
  }
  var hasil;
  for (var i = 0; i < baris; i++) {
    hasil += " *";

    for (var j = 0; j < i; j++) {
      hasil += " *";
    }
    hasil += "\n";
  }
  alert(hasil);
} else if (jenisProgram == 2) {
} else if (jenisProgram == 3) {
} else if (jenisProgram == 4) {
} else {
  alert("invalid");
}
