// 배열1, 배열2 두개의 배열을 전달받아
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2];

function match(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}

const result = match(arr1, arr2);
console.log(result);
