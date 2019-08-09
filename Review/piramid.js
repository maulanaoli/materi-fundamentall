var x = "";
var y = "";
var z = "";

for (i = 1; i <= 10; i++) {
  for (j = 1; j < i; j++) {
    x += j;
  }
  for (w = 10; w > i; w--) {
    y += "1";
  }
}
console.log(x);
