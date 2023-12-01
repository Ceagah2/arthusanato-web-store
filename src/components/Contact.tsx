import {theme} from '../theme'
import styled from 'styled-components'
import { socials } from '../constants/social'
export const Contact = () => {
  const onClick = (link: string) => {
    window.open(link, '_blank')
  }
  return(
    <ContactContainer id='Contact'>
      <ContactTitle>Contato</ContactTitle>
      <ContactDescription>Entre em contato conosco</ContactDescription>
      <SocialContainer>
        <SocialCards>
          {socials.map((social) => (
            <SocialCard key={social.id} onClick={() => onClick(social.link)}>
              <SocialIcon src={social.image} />
              <SocialTitle>{social.name}</SocialTitle>
            </SocialCard>
          ))}
        </SocialCards>
      </SocialContainer>
    </ContactContainer>
  )
}


const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  margin-top: 20px;
  padding-top: 20px;
`

const ContactTitle = styled.h1`
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.brown};
  text-align: center;
`
const ContactDescription = styled.p`
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.brown};
  text-align: center;
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const SocialCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

const SocialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  flex-direction: column;
  background: ${theme.colors.beige};
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    scale: 1.1;
    transition: 0.5s ease-in-out;
  }
`

const SocialIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`
const SocialTitle = styled.span`
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.heading};
  margin: 10px 0 10px 0;
`
