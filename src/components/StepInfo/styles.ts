import styled from 'styled-components'

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  position: absolute;
  top: 200px;
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`

export const Circle = styled.div`
  background-color: #8155cf;
  width: 54px;
  height: 54px;
  border-radius: 50%;

  position: relative;
  display: flex;
  align-self: center;
  justify-self: center;

  span {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
