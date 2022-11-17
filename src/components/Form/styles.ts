import styled from 'styled-components'
import { themes } from '../../styles/Theme'

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 51px;
  align-items: center;
  color: ${themes.black};

  img {
    max-width: 251px;
    min-height: 39px;
  }
`

export const Footer = styled.div`
  display: flex;
  gap: 15px;
`
