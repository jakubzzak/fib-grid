export class FibonacciSequenceService {
  private fibs: Set<number>;
  private lastTwo: number[];

  constructor(startFrom: number = 3) {
    this.lastTwo = [0, 1];
    while (this.lastTwo[0] < startFrom) {
      const nextFibNum = this.lastTwo[0] + this.lastTwo[1];
      this.lastTwo = [this.lastTwo[1], nextFibNum];
    }
    this.fibs = new Set(this.lastTwo);
  }

  private expandSequence() {
    const nextFibNum = this.lastTwo[0] + this.lastTwo[1];
    this.lastTwo = [this.lastTwo[1], nextFibNum];
    this.fibs.add(nextFibNum);
  }

  isFibonacci(num: number) {
    while (num > this.lastTwo[1]) {
      this.expandSequence();
    }
    return this.fibs.has(num);
  }
}
