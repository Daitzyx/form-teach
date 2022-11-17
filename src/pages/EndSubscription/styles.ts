import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 100px;
  line-height: 1.7;
`
export const Info = styled.div`
  width: 60%;
  font-size: 20px;

  h1 {
    margin-top: 80px;
    margin-bottom: 40px;
    font-size: 50px;
  }

  p {
    margin-bottom: 20px;
  }
`

export const Attention = styled.span`
  font-size: 14px;
  width: 80%;

  a {
    color: inherit;
    text-decoration: underline;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-right: 200px;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const SocialMedias = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
