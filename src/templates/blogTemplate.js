import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>

      <div className="w-full sm:w-1/2 md:w-1/3 mx-auto">
        <img src={frontmatter.image} className="pt-10" alt={frontmatter.title}/>
        <h1 className="text-center text-2xl text-gray-900 font-serif mb-1 pt-10">{frontmatter.title}</h1>
        <p className="text-right mt-1 text-gray-500 text-sm pb-5">{frontmatter.date}</p>

        <div className="text-gray-900 mb-6 text-justify"
        dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image
      }
    }
  }
`
