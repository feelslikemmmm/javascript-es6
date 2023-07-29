// 배열과 특정한 요소를 전달받아 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수

let array = ['바나나', '키위', '딸기', '키위', '메론', '망고'];

const counter = (arr, item) => {
  return arr.filter((value) => value === item).length;
};

console.log(counter(array, '바나나'));
