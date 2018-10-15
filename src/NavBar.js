import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";
import colors from "./colors";

const Container = styled("header")`
  position: sticky;
  top: 0;
  background-color: ${colors.dark};
  z-index: 10;
`;

const NavBar = () => (
  <Container>
    <Link to="/">Adopt me!</Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </Container>
);

export default NavBar;
