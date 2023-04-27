import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
  const StyledNavLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;
  return (
    <div className="container">
      <nav className="navigation">
        <StyledNavLink className="navigation-link" to="/">
          Home
        </StyledNavLink>
        <StyledNavLink className="navigation-link" to="/movies">
          Movies
        </StyledNavLink>
      </nav>
    </div>
  );
};
