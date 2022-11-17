import { InputHTMLAttributes } from 'react'
import { InputContainer, InputElement } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  question?: string
  label?: string
}

export const Input = ({ label, question, ...rest }: InputProps) => {
  return (
    <InputContainer>
      <p>{question}</p>
      <InputElement placeholder={label} type="text" {...rest} />
    </InputContainer>
  )
}
