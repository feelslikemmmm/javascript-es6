// 5보다 큰 숫자들의 평균 구하기

const nums = [3, 16, 5, 25, 4, 34, 21];

const result = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result);
