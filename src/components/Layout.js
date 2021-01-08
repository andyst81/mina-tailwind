import React from "react"
import SEO from "./SEO"
import Header from "./Header"
import Footer from "./Footer"
import Form from "./Form"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
        <div class="elfsight-app-dde1aff1-d8f2-40f1-a3eb-3fe8bb51a0cc"></div>
        <Header />
        <div className="flex-grow">{children}</div>
        <Form />
        <div class="elfsight-app-f2ab9b20-bc97-4e96-ba60-986081ae25b3"></div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
