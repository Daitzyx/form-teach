import { useNavigate } from 'react-router-dom'
import {
  Container,
  Description,
  EndStep,
  Enroll,
  Image,
  Infos,
  SubInfo
} from './styles'

import { datas } from '../../data/index'
import { Header } from '../../components/Header'
import { StepInfo } from '../../components/StepInfo'
import { Button } from '../../components/Button'

export const Content = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      {/* <div style={{ height: '100vh', marginTop: '135px' }}> */}
      {datas.map((item) => (
        <Container
          end={item.description === 'Então bora se inscrever!'}
          key={item.title}
          hasBackground={item.title === 'Como funciona?' && true}
        >
          {item.description === 'Então bora se inscrever!' && (
            <>
              <StepInfo />
              {/* <hr /> */}
            </>
          )}

          <Infos ends={item.description === 'Então bora se inscrever!'}>
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

          {item.description !== 'Então bora se inscrever!' ? (
            <Image>
              <img src={item.image} alt="" />
            </Image>
          ) : (
            <Button width="264px" onClick={() => navigate('/enroll')}>
              Enroll
            </Button>
          )}
        </Container>
      ))}
      {/* </div> */}
    </>
  )
}
