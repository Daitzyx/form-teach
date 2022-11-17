import { createGlobalStyle } from 'styled-components'
import { themes } from './Theme'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-snap-type: y mandatory;
  }

  body {
    line-height: 1;
    background-color: #251542;

    font-family: 'Montserrat';
    color: ${themes.white};
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: transparent;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  input:disabled {
    cursor: not-allowed;
  }

  &::-webkit-scrollbar {
  height: 6px;
  width: 10px;
  border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.gray20};
    border-radius: 20px;
  }
`
