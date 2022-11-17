import { Container, Description, Enroll, Image, Infos, SubInfo } from './styles'

import { datas } from '../../data/index'
import { Header } from '../../components/Header'
import { StepInfo } from '../../components/StepInfo'

export const Content = () => {
  return (
    <>
      <Header />

      {datas.map((item) => (
        <Container
          key={item.title}
          hasBackground={item.title === 'Como funciona?' && true}
        >
          <Infos>
            <Description>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Description>
            {!!item.infos &&
              item.infos?.map((t) => (
                <SubInfo key={t.title}>
                  <img src={t.icon} alt="" />
                  <p>{t.title}</p>
                  <p>{t.subtitle}</p>
                </SubInfo>
              ))}
          </Infos>
          <div style={{ marginBottom: '130px' }}>
            {item.description === 'Então bora se inscrever!' && <StepInfo />}
          </div>
          <Image>
            <img src={item.image} alt="" />
          </Image>
        </Container>
      ))}
    </>
  )
}
