import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostLink from "./post-link"

const RecentBlog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 3) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              date(formatString: "MMMMM DD, YYYY")
              slug
              image
              intro
              title
            }
          }
        }
      }
    }
  `)
  const pulledData = JSON.stringify(data, null, 4)
  const parsedData = JSON.parse(pulledData)
  var midData = parsedData.allMarkdownRemark.edges

  const Posts = midData.map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {Posts}
      </div>
  </div>
  )


}

export default RecentBlog