import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  width?: string
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  children,
  color = 'yellow',
  width = '100%',
  type = 'button' || 'submit',
  onClick,
  disabled
}: ButtonProps) => {
  return (
    <ButtonContainer
      type={type}
      color={color}
      width={width}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}
