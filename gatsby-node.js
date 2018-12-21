const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        blogPosts(where: { status: PUBLISHED }) {
          id
          title
          createdAt
          slug
        }
      }
    }
  `)

  data.cms.blogPosts.forEach(blog => {
    actions.createPage({
      // `/products/${edge.node.id}/`
      path: `/blog/${blog.id}`,
      component: path.resolve(`./src/components/BlogPost.js`),
      context: {
        blogId: blog.id,
      },
    })
  })
}
