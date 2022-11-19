import { ICalculatorView } from "./interfaces";
import { describe, expect, test } from "vitest";
import { CalculatorPresenter } from "./calculator-presenter";
import { Calculator } from "./calculator";

class CalculatorViewMock implements ICalculatorView {
  firstArg: string;
  secondArg: string;
  result: number;
  error: string;

  constructor() {
    this.firstArg = "";
    this.secondArg = "";
    this.result = NaN;
    this.error = "";
  }

  firstArgument() {
    return this.firstArg;
  }

  secondArgument() {
    return this.secondArg;
  }

  printResult(result: number) {
    this.result = result;
  }

  printError(error: string) {
    this.error = error;
  }
}

describe("CalculatorPresenter", () => {
  const view = new CalculatorViewMock();
  const presenter = new CalculatorPresenter(view, new Calculator());

  describe("success", () => {
    test.each([
      [0.1, 0.2, 0.3],
      [0.2, 0.1, 0.3],
      [1, 1, 2],
    ])("plus(%i, %i) = %i", (a, b, expected) => {
      view.firstArg = String(a);
      view.secondArg = String(b);
      presenter.onPlusClicked();
      expect(view.result).toBeCloseTo(expected);
    });

    test.each([
      [1, 0, 1],
      [-100, -10, -90],
    ])("minus(%i, %i) = %i", (a, b, expected) => {
      view.firstArg = String(a);
      view.secondArg = String(b);
      presenter.onMinusClicked();
      expect(view.result).toEqual(expected);
    });

    test.each([
      [1, 8, 8],
      [12.5, 8, 100],
      [-0.5, 10, -5],
    ])("multiply(%i, %i) = %i", (a, b, expected) => {
      view.firstArg = String(a);
      view.secondArg = String(b);
      presenter.onMultiplyClicked();
      expect(view.result).toEqual(expected);
    });

    test.each([
      [10, 2, 5],
      [2, 10, 0.2],
    ])("divide(%i, %i)", (a, b, expected) => {
      view.firstArg = String(a);
      view.secondArg = String(b);
      presenter.onDivideClicked();
      expect(view.result).toEqual(expected);
    });
  });

  describe("failure", () => {
    test.each([
      () => presenter.onPlusClicked(),
      () => presenter.onMinusClicked(),
      () => presenter.onDivideClicked(),
      () => presenter.onDivideClicked(),
    ])("first argument is not a number", (func) => {
      const a = "asd";
      const b = 1;

      view.firstArg = String(a);
      view.secondArg = String(b);

      func();

      expect(view.error).toBe("Wrong input");
    });

    test.each([
      () => presenter.onPlusClicked(),
      () => presenter.onMinusClicked(),
      () => presenter.onDivideClicked(),
      () => presenter.onDivideClicked(),
    ])("first argument is not a number", (func) => {
      const a = 1;
      const b = "asd";

      view.firstArg = String(a);
      view.secondArg = String(b);

      func();

      expect(view.error).toBe("Wrong input");
    });
    test("divide by zero", () => {
      const a = 5;
      const b = 0;

      view.firstArg = String(a);
      view.secondArg = String(b);

      presenter.onDivideClicked();

      expect(view.error).toBe("Can't divide by 0");
    });
  });
});
