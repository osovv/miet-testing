import './app.css'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { vi } from 'vitest'
import { Calculator } from './calculator/calculator'
import { CalculatorPresenter } from './calculator/calculator-presenter'
import { CalculatorView } from './calculator/calculator-view'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center p-4 file:container">
      <main className=" mb-auto h-full w-full max-w-screen-md">{children}</main>
    </div>
  )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const Input = ({ value, onChange, label }: InputProps) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-xl">{label}</label>
        <input className="border-2" value={value} onChange={onChange} />
      </div>
    </>
  )
}

const Button = ({
  children,
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="w-16 h-full border-2 text-center font-bold text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const App = observer(() => {
  const calculator = new Calculator()
  const [view] = useState(() => new CalculatorView())

  const [presenter] = useState(() => new CalculatorPresenter(view, calculator))

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <Input
          label="First argument"
          value={view.firstArgument()}
          onChange={(e) => view.setFirstArgument(e.target.value)}
        />
        <Input
          label="Second argument"
          value={view.secondArgument()}
          onChange={(e) => view.setSecondArgument(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center mt-10 gap-4">
        <Button onClick={() => presenter.onPlusClicked()}>+</Button>
        <Button onClick={() => presenter.onMinusClicked()}>-</Button>
        <Button onClick={() => presenter.onMultiplyClicked()}>x</Button>
        <Button onClick={() => presenter.onDivideClicked()}>/</Button>
      </div>
      <div className="flex items-center justify-center mt-10 font-bold text-2xl">
        {!view.error && !Number.isNaN(view.result) && (
          <span>Result: {view.result}</span>
        )}
        {view.error && (
          <span className="text-red-700">Error: {view.error}</span>
        )}
      </div>
    </Layout>
  )
})
