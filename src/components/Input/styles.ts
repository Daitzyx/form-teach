import styled from 'styled-components'
import { themes } from '../../styles/Theme'

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${themes.gray};

  p {
    margin-bottom: 10px;
    align-self: flex-start;
    color: ${themes.gray20};
  }
`

export const InputElement = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  padding-left: 20px;

  border: none;
  outline: 0;

  color: ${themes.gray};
  border-radius: 11px;
  border: 1px solid ${themes.gray};
  font-weight: 400;
  font-size: 15px;

  @media (max-width: 550px) {
    min-width: 100%;
    padding-left: 65px;
  }

  &::placeholder {
    font-size: 15px;
    color: ${themes.gray20};
  }
`
