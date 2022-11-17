import styled from 'styled-components'

type ButtonsProps = {
  color: string
  width?: string
  height?: string
  isActive?: boolean
  disabled?: boolean
}

export const ButtonContainer = styled.button<ButtonsProps>`
  width: ${({ width }) => width};
  height: 45px;
  background-color: #8155cf;
  color: #ffff;
  border: none;
  border-radius: 20px;

  font-size: 15px;
  font-weight: 700;
`
