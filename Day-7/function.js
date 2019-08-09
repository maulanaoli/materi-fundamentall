function reserve(par) {
  return par
    .split("")
    .reverse()
    .join("");
}
console.log(reserve("Purwadhika"));
