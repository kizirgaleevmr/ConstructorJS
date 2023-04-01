const arr = [1, 2];
const arr2 = [1, 2];

function arrayEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}
document.write(arrayEqual(arr, arr2));
let str = "background-color";

let arrStr = str.split("");
arrStr[11] = arrStr[11].toUpperCase();
arrStr = arrStr.join("").split("-");
arrStr = arrStr.join("");
console.log(arrStr);

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculator = function (str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NAN;
    }
    return this.methods[op](a, b);
  };
}

let calc = new Calculator();

console.log(calc.methods["+"](3, 8));
