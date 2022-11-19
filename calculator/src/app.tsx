import React from "react";
import "./app.css";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center p-4 file:container">
      <main className=" mb-auto h-full w-full max-w-screen-md">{children}</main>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <div className="bg-red-100 w-full h-full"></div>
    </Layout>
  );
}

export default App;
