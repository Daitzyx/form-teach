import book from '../assets/book.png'
import hand from '../assets/hand.png'
import checked from '../assets/checked.png'
import brain from '../assets/brain.png'
import question from '../assets/question.png'

export const stepsToEnroll = [
  {
    title: 'Inscrição',
    step: '1',
    icon: `${hand}`
  },
  {
    title: 'Teste de lógica',
    step: '2',
    icon: `${brain}`
  },
  {
    title: 'Teste de código',
    step: '3',
    icon: `${book}`
  },
  {
    title: 'Entrevista',
    step: '4',
    icon: `${question}`
  },
  {
    title: 'Resultado',
    step: '5',
    icon: `${checked}`
  }
]
