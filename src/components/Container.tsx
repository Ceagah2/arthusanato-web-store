import styled from 'styled-components'
import { IContainer } from '../types'
import { theme } from '../theme'

export const Container = ({children}: IContainer) => {
  return(
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  background: ${theme.colors.gray};
`