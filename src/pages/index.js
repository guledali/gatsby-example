import { graphql } from "gatsby"
import React from "react"
//import { makeBlogPath } from "../utils"
import dateformat from "dateformat"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    <p>
      <a href="https://www.gatsbyjs.org/packages/gatsby-source-graphql/">
        Using gatsby-source-graphql
      </a>
    </p>
    {data.cms.blogPosts.map((blog, i) => (
      <a key={i} href={`/blog/${blog.id}`}>
        <h2>
          {dateformat(blog.createdAt, `fullDate`)} - {blog.title}
        </h2>
      </a>
    ))}
  </div>
)

export const query = graphql`
  query {
    cms {
      blogPosts(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
        id
        title
        createdAt
        slug
      }
    }
  }
`
