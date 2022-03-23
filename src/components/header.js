import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-plugin-transition-link";
import Container from "./container";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme.js";

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

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
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
            <HeaderNavList>
              <button onClick={switchTheme}>
                {theme === "dark" ? (
                  <span aria-label="Light mode" role="img">
                    🌞
                  </span>
                ) : (
                  <span aria-label="Dark mode" role="img">
                    🌜
                  </span>
                )}
              </button>{" "}
            </HeaderNavList>
          </HeaderNavList>
        </HeaderWrapper>
      </StyledHeader>
    </ThemeProvider>
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

const StyledHeader = styled.header`
  padding-top: var(--size-300);
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
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
