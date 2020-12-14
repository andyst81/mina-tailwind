import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
      <div className="-my-8">
        <div className="py-8 flex flex-wrap md:flex-no-wrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img className="tracking-widest font-serif text-gray-900" src={post.frontmatter.image} />
          </div>
          <div className="md:flex-grow pl-8">
            <h2 className="text-2xl text-gray-900 font-serif mb-2">{post.frontmatter.title}</h2>
            <div className="text-left mt-1 text-gray-500 text-sm">{post.frontmatter.date}</div>
            <p className="leading-relaxed">{post.frontmatter.intro}</p>
            <div className="text-orange-500 inline-flex items-center mt-4 hover:text-orange-600"><Link to={`/posts/${post.frontmatter.slug}`}>Read More</Link>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
)

export default PostLink
