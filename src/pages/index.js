import React from "react"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Form from "../components/Form"
export default () => {
  return (
    <Layout>
      <About />
      <Gallery />
      <Blog />
      <Form />
    </Layout>
  )
}
