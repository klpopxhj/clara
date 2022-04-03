import React, { Fragment } from "react";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import Container from "./container";
import styled from "styled-components";
import GlobalStyle from "./global-styles";

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

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    margin-top: auto;
    margin-bottom: auto;
  }

  & footer {
    margin-top: auto;
  }
`;
