import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import StyledLink from "../components/styled-link";
import Newsletter from "../components/newsletter";
import Hero from "../components/hero";
import Featured from "../components/featured";

import tw from "tailwind-styled-components";

const HomePage = ({ data }) => {
  // const posts = data.allMarkdownRemark.nodes;
  const intro = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;
  const ctaText = data.markdownRemark.frontmatter.ctaText;
  const ctaLink = data.markdownRemark.frontmatter.ctaLink;

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />
      <Hero />
      <Featured />
      {/* <Button>
        <StyledLink to={ctaLink}>{ctaText}</StyledLink>
      </Button> */}
      <Newsletter />
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: center;

  & p {
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: var(--size-700);
    }
  }
`;

const Button = tw.button`
  flex
  flex-col	
  max-w-prose	
  items-center	
  mx-auto	
  my-4
  text-center	
  theme-dark
  bg-primary
  text-text-main

`;
export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        ctaText
        ctaLink
      }
    }
  }
`;
