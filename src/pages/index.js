import React from "react"
import Layout from "../components/Layout"
import RecentBlog from "../components/recent-blog"
import About from "../components/About"
import GalleryDisp from "../components/GalleryDisp"

export default () => {
  return (
    <Layout>
      <About />
      <GalleryDisp />
      <RecentBlog />
    </Layout>
  )
}
