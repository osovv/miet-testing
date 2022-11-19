import { makeAutoObservable } from 'mobx'
import { ICalculatorView } from './interfaces'

export class CalculatorView implements ICalculatorView {
  a: string
  b: string
  result: number
  error: string

  constructor() {
    this.a = ''
    this.b = ''
    this.result = Number.NaN
    this.error = ''
    makeAutoObservable(this)
  }

  printResult(result: number) {
    this.result = result
  }

  printError(error: string) {
    this.error = error
  }

  firstArgument() {
    return this.a
  }

  secondArgument() {
    return this.b
  }

  setFirstArgument(arg: string) {
    this.a = arg
  }

  setSecondArgument(arg: string) {
    this.b = arg
  }
}
