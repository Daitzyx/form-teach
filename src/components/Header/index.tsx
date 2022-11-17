import React from 'react'
import logoWhite from '../../assets/logoWhite.svg'
import { Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <img src={logoWhite} alt="" />
    </Container>
  )
}
