import styled from 'styled-components'
import {theme} from '../theme'
import { THeaderImage, IHeader } from '../types'

export const Header = (props:IHeader) => {
  const {image, title, subtitle} = props
  return(
    <HeaderContainer>
      <HeaderImage image={image}>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubTitle>{subtitle}</HeaderSubTitle>
      </HeaderImage>
    </HeaderContainer>
  )
}


export const HeaderContainer = styled.header`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderImage = styled.div<THeaderImage>`
  background-image: url(${(props) => props.image ? props.image : ''});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

`

export const HeaderTitle = styled.h1`
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.header};
  font-family: ${theme.fonts.heading};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5rem;

  text-shadow: -1px -1px 0 #000,  
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000;
`

export const HeaderSubTitle = styled.h2`
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.heading};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;
  
  text-shadow: -1px -1px 0 #000,  
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000;
`