let arr = [5, 6, 7, 8, 9, 2, 3, 4, 10, 11];

let arrSort = arr.sort(() => Math.random() - 0.5);

let userCard = [];

let startGame = confirm("Желаете сыграть?");
let i = 0;
let nextGame = "";

if (startGame) {
  do {
    let takeCard = confirm("Взять карту?");
    if (takeCard) {
      userCard[i] = arrSort.splice(i, 1);
      alert("У вас " + userCard[i] + " карта");
      i++;
    }
    nextGame = confirm("Добавить карту");
  } while (nextGame);
}

let count = userCard.reduce((acc, el) => (acc += +el), 0);

console.log(count);
console.log(count);
console.log(count);
