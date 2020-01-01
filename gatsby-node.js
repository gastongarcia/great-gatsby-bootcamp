const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    console.log(JSON.stringify(node, undefined, 4));
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(`
    query BlogPost {
      allMarkdownRemark(
        limit: 1000
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (results.error) {
    console.log("Something went wrong fetching the initial slug in graphql");
    return;
  }

  results.data.allMarkdownRemark.edges.forEach(edge => {
    const post = edge.node;

    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/blogPost.js"),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
};
