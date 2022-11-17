import styled from 'styled-components'
import { themes } from '../../styles/Theme'

export const Container = styled.div`
  width: 100%;
  height: 135px;

  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 50px;
  top: 0;
  left: 0;

  background-color: ${themes.purple50};
  border-bottom: 1px solid ${themes.white};
  z-index: 9;
`
