var param = [[1, 4, 7, 9], [2, 3, 9], [4, 6, 9]];

function sumArr() {
  param.map(val, idx => {
    idx.map(idx + idx + idx);
  });
}
