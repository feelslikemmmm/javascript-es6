// 주어진 배열에서 중복 제거하기

const fruits = ['바나나', '사과', '포도', '바나나', '사과', '배'];

function removeDuplication(array) {
  return [...new Set(array)];
}

console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기

const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3, 4, 5]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}

console.log(findIntersection(set1, set2));
