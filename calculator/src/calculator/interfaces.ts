export interface ICalculator {
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
  multiply: (a: number, b: number) => number
  divide: (a: number, b: number) => number
}

export interface ICalculatorView {
  printResult: (result: number) => void
  printError: (error: string) => void
  firstArgument: (_: void) => string
  secondArgument: (_: void) => string
}

export interface ICalculatorPresenter {
  onPlusClicked: (_: void) => void
  onMinusClicked: (_: void) => void
  onMultiplyClicked: (_: void) => void
  onDivideClicked: (_: void) => void
}
