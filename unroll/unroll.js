let square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function unroll(squareArray) {
  let arr = [];
  for (let index = 0; index < squareArray.length; index++) {
    console.log("logged", index);
    if (index % 2 !== 0) {
      arr = arr.concat(squareArray[index].reverse());
    } else {
      arr = arr.concat(squareArray[index]);
    }
  }
  console.log(arr);
  //   squareArray.forEach((element) => {
  //     element.forEach((el) => arr.push(el));
  //   });
  return arr;
}
console.log(unroll(square));
module.exports = unroll;
