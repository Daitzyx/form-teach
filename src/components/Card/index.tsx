import { ReactNode } from 'react'

import { Container } from './styles'

type Props = {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: Props) => {
  return <Container className={className}>{children}</Container>
}
