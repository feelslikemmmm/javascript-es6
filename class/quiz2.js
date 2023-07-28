class Employee {
  constructor(name, deaprtment, hoursPerMonth, payRate) {
    this.name = name;
    this.deaprtment = deaprtment;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimer extends Employee {
  static PAY_RATE = 10000;
  constructor(name, deaprtment, hoursPerMonth) {
    super(name, deaprtment, hoursPerMonth, FullTimer.PAY_RATE);
  }
}

class PartTimer extends Employee {
  static PAY_RATE = 8000;

  constructor(name, deaprtment, hoursPerMonth) {
    super(name, deaprtment, hoursPerMonth, PartTimer.PAY_RATE);
  }
}

const fullTimer = new FullTimer('낙원', 'software', 20);
const partTimer = new PartTimer('낙원s', 'software', 10);

console.log(fullTimer.calculatePay());
console.log(partTimer.calculatePay());
