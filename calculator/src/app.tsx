import './app.css'
import React from 'react'

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

export const App = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <Input label="First argument" />
        <Input label="Second argument" />
      </div>
      <div className="flex items-center justify-center mt-10 gap-4">
        <Button>+</Button>
        <Button>-</Button>
        <Button>x</Button>
        <Button>/</Button>
      </div>
      <div className="flex items-center justify-center mt-10 font-bold text-2xl">
        Result: 50
      </div>
    </Layout>
  )
}
