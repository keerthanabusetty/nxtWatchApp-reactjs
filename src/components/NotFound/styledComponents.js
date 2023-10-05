import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`
export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin-top: 80px;
  min-height: 100px;
  width: 85%;
`
export const NotFoundImage = styled.img`
  width: 50%;
`
export const NotFoundText = styled.h1`
  font-family: 'Roboto';
`
export const SorryMsg = styled.p`
  font-family: 'Roboto';
`
