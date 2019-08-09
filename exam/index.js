test = a => {
  var kata = "";
  var dalamkata = "";
  arr = a.split(" ");

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (j == i) {
        continue;
      } else {
        if (arr[j].includes(arr[i])) {
          kata = arr[j];
          dalamkata = arr[i];
          return `kata : ${dalamkata} [ada di dalam] ${kata}`;
        }
      }
    }
  }
};

//console.log(test("ada badai disini"));

kata = a => {
  kataPenampung = "";
  arr = a.split(" ");
  //   console.log(arr);

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (j == i) {
        continue;
      } else {
        if (
          arr[j]
            .split("")
            .sort()
            .join() ==
          arr[i]
            .split("")
            .sort()
            .join()
        ) {
          kata1 = arr[i];
          kata2 = arr[j];
          return `${kata1} ==  ${kata2}`;
        }
      }
    }
  }
  //   console.log(arr[0].split(""));
};
console.log(kata("kasur dirumah rusak"));
