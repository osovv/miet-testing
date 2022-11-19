import './app.css'
import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center p-4 file:container">
      <main className=" mb-auto h-full w-full max-w-screen-md">{children}</main>
    </div>
  )
}

export const App = () => {
  return (
    <Layout>
      <div className="bg-red-100 w-full h-full" />
    </Layout>
  )
}
