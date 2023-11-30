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

const CardContainer = styled.div``;
const CardImage = styled.img``;
const CardTitle = styled.span``;
const CardDescription = styled.p``