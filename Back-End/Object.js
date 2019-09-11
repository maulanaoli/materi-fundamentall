// // var bikinTimeout = (fn, time) => {
// //   for (var i = 0; i <= time * 1000000; i++) {}
// //   fn();
// // };
// // arr =[1,2,3,4,5]
// // var contoh = () => {
// //   console.log("hello");
// // };

// // bikinTimeout(contoh, 3000);

// var filter = (arr, fn) => {
//   var newArr = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// var numbers = [1, 2, 3, 4, 5];

// var hasil = filter(numbers, item => {
//   return item % 2 == 0;
// });
// console.log(hasil);

var angka = 0;

tampilkanAngka = () => {
  newArr = [];
  newObb = {
    angka1: "|\n|",
    angka0: angkaNol
  };
  do {
    newArr.unshift(angka % 10);
    angka = Math.floor(angka / 10);
  } while (angka > 0);
  console.log(newArr);
};
tampilkanAngka();

var angkaNol = " _\n|_|\n|_| ";
newArr.push(angkaNol);

console.log(newObb.angka1 + newObb.angka0);
