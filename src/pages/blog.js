import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Layout from "../components/layout";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPostList {
      allMarkdownRemark(
        limit: 1000
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout tabTitle="Blog">
      <ol className="p-5">
        {posts.map(post => (
          <li className="list-disc ml-5 mb-3" key={post.node.frontmatter.slug}>
            <Link
              className="underline"
              to={`/blog/${post.node.frontmatter.slug}`}
            >
              {post.node.frontmatter.title}
            </Link>
            <span className="block text-sm">{post.node.frontmatter.date}</span>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
