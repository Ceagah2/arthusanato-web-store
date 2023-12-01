import styled from 'styled-components'
import {theme} from '../theme'
import { ICard } from '../types';

export const Card = (props: ICard) => {
  const {image, title, description} = props
  return(
    <CardContainer>
      <CardImage src={image} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 500px;
  background-color: ${theme.colors.white};
  margin: 10px;
  padding: 10px;
  border-radius: 20px
  `;
const CardImage = styled.img`
  width: 250px;
  height: 150px
  object-fit: cover
  border-radius: 10px
  margin-bottom: 10px
  margin-top: 10px
  border-radius: 10px
`;
const CardTitle = styled.span`
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
  margin-bottom: 10px;
  text-align: center;
`;
const CardDescription = styled.p`
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  text-align: center
  margin-bottom: 10px
`