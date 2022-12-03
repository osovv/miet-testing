import {
  ICalculator,
  ICalculatorPresenter,
  ICalculatorView,
} from './interfaces'

export class CalculatorPresenter implements ICalculatorPresenter {
  view: ICalculatorView
  calculator: ICalculator

  constructor(view: ICalculatorView, calculator: ICalculator) {
    this.view = view
    this.calculator = calculator
  }

  onPlusClicked() {
    this.operation(this.calculator.add)
  }

  onMinusClicked() {
    this.operation(this.calculator.subtract)
  }

  onMultiplyClicked() {
    this.operation(this.calculator.multiply)
  }

  onDivideClicked() {
    this.operation(this.calculator.divide)
  }

  private operation(func: (arg0: number, arg1: number) => number) {
    this.view.printError('')
    const a = Number.parseFloat(this.view.firstArgument())
    const b = Number.parseFloat(this.view.secondArgument())

    if (Number.isNaN(a) || Number.isNaN(b)) {
      this.view.printError('Wrong input')
      return
    }

    try {
      const result = func(a, b)
      this.view.printResult(Number.parseFloat(result.toPrecision(12)))
    } catch (error) {
      if (error instanceof Error) {
        this.view.printError(error.message)
      }
    }
  }
}
