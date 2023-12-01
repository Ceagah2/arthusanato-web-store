import styled from 'styled-components'
import {theme} from '../theme'
export const Footer = () => {
  return(
    <FooterContainer>
      <FooterText>Copyright © 2023 - {new Date().getFullYear()} - Arthus'anato e Lele vasos. Todos os direitos reservados.</FooterText>
      <FooterLink href="https://ceagah-dev-portfolio.netlify.app/" target="_blank"><FooterIcon>&#169; </FooterIcon>Carlos Ceagah</FooterLink>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`
const FooterText = styled.p`
  font-size: ${theme.fontSizes.description};
  font-family: ${theme.fonts.body};

`
const FooterIcon = styled.span`
    font-size: ${theme.fontSizes.description};
  font-family: ${theme.fonts.body};
`
const FooterLink = styled.a`
  font-size: ${theme.fontSizes.description};
  font-family: ${theme.fonts.body};
  text-decoration: none;
`