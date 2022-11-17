import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import firebase from '../../config/firebase'

import { Button } from '../Button'
import { Container, Footer, Header } from './styles'

import logo from '../../assets/logoPurple.svg'
import { PersonalDatas } from '../Register/PersonalDatas'
import { PersonalInfo } from '../Register/PersonalInfo'
import { Educational } from '../Register/Educational'

export const Form = () => {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    whereStudying: '',
    course: '',
    semester: '',
    endCourse: '',
    job: '',
    company: '',
    thingsLiked: '',
    programmingInterest: '',
    howKnows: '',
    freeTime: ''
  })

  const steps = [1, 2, 3]

  // eslint-disable-next-line consistent-return
  const pageDisplay = () => {
    if (step === 0) {
      return <PersonalDatas formData={formData} setFormData={setFormData} />
    }
    if (step === 1) {
      return <Educational formData={formData} setFormData={setFormData} />
    }
    if (step === 2) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />
    }
  }

  const handlePrev = () => {
    if (step !== 0) {
      setStep((currPage) => currPage - 1)
    } else {
      alert('Redirecionando à pagina inicial!')
      navigate('/')
    }
  }

  const handleNext = () => {
    if (step !== steps.length - 1) {
      setStep((currPage) => currPage + 1)
    } else {
      navigate('/finished')
    }
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <h2>Inscrição {steps[step]}/3</h2>
      </Header>

      <Container>{pageDisplay()}</Container>

      <Footer>
        <Button onClick={handlePrev}>Voltar</Button>
        <Button
          type={step === steps.length - 1 ? 'submit' : 'button'}
          onClick={handleNext}
        >
          {step === steps.length - 1 ? 'Enviar' : 'Avançar'}
        </Button>
      </Footer>
    </Container>
  )
}
