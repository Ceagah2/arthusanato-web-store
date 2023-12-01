import styled from 'styled-components'
import {theme} from '../theme'

export const NavBar = () => {
  return(
    <NavContainer>
      <NavList>
        <NavItem><NavLink href="#Home">Inicio</NavLink></NavItem>
        <NavItem><NavLink href="#About">Quem somos</NavLink></NavItem>
        <NavItem><NavLink href="#Products">Produtos</NavLink></NavItem>
        <NavItem><NavLink href="#Contact">Entre em contato</NavLink></NavItem>
      </NavList>
    </NavContainer>
  )
}

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.white};
  padding: 20px;
`
export const NavItem = styled.li`
  list-style: none;
    cursor: pointer;


  
`
export const NavLink = styled.a`
  text-decoration: none;
  font-size: ${theme.fontSizes.heading};
  color: ${theme.colors.terracota};
  font-weight: ${theme.fontWeights.bold};
  &:hover {
      color: ${theme.colors.brown};
      text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    }
`