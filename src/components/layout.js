import React, { Fragment } from "react";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import Container from "./container";
import styled from "styled-components";
import GlobalStyle from "./global-styles";
import Testimonial from "./testimonial";

import tw from "tailwind-styled-components";

const Layout = ({ children, title, description, socialImage = "" }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrapper>
    </Fragment>
  );
};

export default Layout;

const LayoutWrapper = tw.div`
  min-h-screen
  flex	
  flex-col
bg-gray-100
dark:bg-gray-700
dark:text-gray-100
text-gray-800

  & main {
    my-auto
  }

  & footer {
    mt-auto
  }
`;
