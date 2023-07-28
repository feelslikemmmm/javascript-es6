class Counter {
  #count;
  constructor(startCount) {
    if (isNaN(startCount) || startCount < 0) {
      this.#count = 0;
    } else {
      this.#count = startCount;
    }
  }

  get count() {
    return this.#count;
  }

  countUp() {
    this.#count++;
    console.log('count up', this.count);
  }

  countDown() {
    if (this.#count <= 0) {
      return console.log('카운트는 0보다 작을 수 없습니다.');
    } else {
      this.#count--;
    }
  }
}

const counter = new Counter(-5);
counter.countDown();
counter.countDown();
console.log('counte', counter.count);
