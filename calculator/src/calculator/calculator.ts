import { ICalculator } from "./interfaces";

export class Calculator implements ICalculator {
  add(a: any, b: any) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  divide(a: number, b: number) {
    if (Math.abs(b) <= 10 ** -8) {
      throw new Error("Can't divide by 0");
    }

    return a / b;
  }
}
