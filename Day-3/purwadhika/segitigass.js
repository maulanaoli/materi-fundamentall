var x = "";

for (let i = 0; i <= 10; i++) {
  for (let k = 0; k <= 10 - i; k++) {
    x += " ";
  }
  for (let j = 1; j <= i; j++) {
    x += " * ";
  }
  x += " * " + "\n";
}

console.log(x);
