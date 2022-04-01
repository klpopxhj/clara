import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-plugin-transition-link";
import Container from "./container";
import { useStaticQuery, graphql } from "gatsby";

import ThemeToggle from "./theme-toggle";

import tw from "tailwind-styled-components";

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>
          <Link to="/">{site.siteMetadata.title}</Link>
        </HeaderTitle>

        <HeaderNavList>
          <HeaderNavListItem>
            <AniLink paintDrip hex="#d9e4f5" to="/blog">
              Blog
            </AniLink>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <AniLink paintDrip hex="#f5e3e6" to="/about">
              About
            </AniLink>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <AniLink paintDrip hex="#d9e4f5" to="/services">
              Services
            </AniLink>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <AniLink paintDrip hex="#f5e3e6" to="/contact">
              Contact
            </AniLink>
          </HeaderNavListItem>
          <HeaderNavListItem>
            <ThemeToggle />
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const HeaderNavList = ({ children }) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  );
};

const HeaderNavListItem = ({ children }) => {
  return <StyledNavListItem>{children}</StyledNavListItem>;
};

const StyledHeader = tw.header`
  pt-5
  theme-dark
`;

const HeaderWrapper = tw(Container)`
    flex
    items-center
    justify-between
`;

const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: inherit;
  }
`;

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
`;

const StyledNavList = tw.ul`
  flex
  items-center
  flex-wrap	
  justify-around	
  p-0	
  list-none	
  bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100
`;

const StyledNavListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 700px) {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  & a {
    color: inherit;
    text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 700px) {
    & a {
      font-size: 0.7rem;
    }
  }
`;
