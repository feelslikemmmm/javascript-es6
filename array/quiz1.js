// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않아야 함

const fruits = ['바나나', '딸기', '포도', '딸기'];

function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

const result = replace(fruits, '딸기', '키위');
console.log(result);
