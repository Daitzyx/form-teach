import styled from 'styled-components'
import backgroundImg from '../../assets/background-two.svg'

export const Container = styled.div<{ hasBackground: boolean }>`
  width: 100%;
  height: 100vh;

  background-image: ${({ hasBackground }) =>
    hasBackground ? `url(${backgroundImg})` : 'none'};

  scroll-snap-align: start;
  scroll-snap-stop: always;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
`

export const Image = styled.div``

export const Infos = styled.div`
  width: 35%;

  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 40px;

  div:nth-child(1) {
    grid-column: 1/3;
  }
`

export const Description = styled.div`
  h2 {
    font-size: 50px;
    margin-bottom: 38px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
  }
`

export const SubInfo = styled.div`
  margin-top: 55px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 50%;
  column-gap: 15px;

  p {
    grid-column: 2/3;
  }

  p:nth-child(2) {
    font-weight: 700;
    font-size: 20px;
  }

  p:nth-child(3) {
    font-weight: 400;
    font-size: 15px;
  }
`

export const Enroll = styled.div`
  width: 100%;
  height: 100vh;
`
