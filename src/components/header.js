import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-plugin-transition-link";
import Container from "./container";
import { useStaticQuery, graphql } from "gatsby";

import ThemeToggle from "./theme-toggle";

import tw from "tailwind-styled-components";

const Header = () => {
  const [onTop, setOnTop] = useState(true);

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

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <HeaderWrapper>
      <header
        className={`${
          onTop
            ? "text-gray-100"
            : "shadow-sm bg-white/30 dark:bg-gray-800/30 dark:text-gray-100 text-gray-800 drop-shadow-md"
        } sticky top-0 transition-shadow backdrop-blur-lg`}
      >
        <HeaderNavList>
          <HeaderTitle className="grow shrink basis-7/12">
            <Link to="/">{site.siteMetadata.title}</Link>
          </HeaderTitle>

          <HeaderNavListItem className="">
            <AniLink paintDrip hex="#d9e4f5" to="/blog">
              Blog
            </AniLink>
          </HeaderNavListItem>

          <HeaderNavListItem className="">
            <AniLink paintDrip hex="#d9e4f5" to="/services">
              Services
            </AniLink>
          </HeaderNavListItem>

          <HeaderNavListItem className="">
            <AniLink paintDrip hex="#f5e3e6" to="/contact">
              Contact
            </AniLink>
          </HeaderNavListItem>

          <HeaderNavListItem className="">
            <ThemeToggle />
          </HeaderNavListItem>
        </HeaderNavList>
      </header>
    </HeaderWrapper>
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

const HeaderWrapper = tw.div`
  fixed
  top-0
  z-10
  w-full
`;

const HeaderTitle = tw.div`
  & a {
  uppercase
  no-underline	
  text-lg	
  text-inherit
  }
`;

const StyledNav = tw.nav`
  px-5
  py-3
`;

const StyledNavList = tw.ul`
  flex
  items-center
  flex-wrap	
  justify-around	
  list-none	
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
