// generic

const arrOfNum: Array<number> = [1, 2, 5];
const arrOfStr: Array<string> = ['Hei', 'Vadim'];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverse(arrOfNum));
console.log(reverse(arrOfStr));
