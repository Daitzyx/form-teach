import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import {
  Attention,
  Container,
  Content,
  SocialMedias,
  Info,
  ContactInfo
} from './styles'
import checkBox from '../../assets/checkbox2.png'

export const EndSubscription = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Info>
            <h1>Obrigado por chegar até aqui!</h1>
            <p>
              Pronto, você quase concluiu sua inscrição em nossa seleção da 3ª
              edição do 3035TEACH
            </p>
            <p>
              Fique atento ao seu e-mail cadastrado (atualize a caixa de entrada
              e verifique o spam), pois entraremos em contato por lá com
              informações sobre as próximas etapas.
            </p>
            <p>
              Caso tenha alguma dúvida, por favor, entre em contato pelo e-mail:
              teach@3035tech.com.
            </p>
            <p>Para concluir sua inscrição, realize o Teste de lógica: </p>
          </Info>
          <Button width="264px">Teste de Lógica</Button>
          <Attention>
            ATENÇÃO: é um teste rápido (cerca de 12 minutos) e que necessita de
            perfil ‘learner’ no site:
            <a href="https://app.testcrackr.com/">
              https://app.testcrackr.com/
            </a>
            . Caso ainda não tenha login, sugerimos que faça a criação antes de
            iniciar o teste
          </Attention>
        </Content>

        <div>
          <ContactInfo>
            <img src={checkBox} alt="ícone de checkbox" />
            <span>Hey, segue a gente nas redes!</span>
            <SocialMedias>
              <span>3035tech.com</span>
              <span>3035Tech</span>
              <span>3035Tech</span>
              <span>3035 Tech</span>
            </SocialMedias>
          </ContactInfo>
        </div>
      </Container>
    </>
  )
}
