import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout tabTitle="Blog">
      <section className="p-5">
        <div className="blog-post">
          <h2 className="text-xl">{post.frontmatter.title}</h2>
          <h3 className="text-sm">{post.frontmatter.date}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
