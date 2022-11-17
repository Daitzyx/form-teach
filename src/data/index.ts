import first from '../assets/first.svg'
import clock from '../assets/clock.png'
import checkbox from '../assets/checkbox.png'
import computer from '../assets/computer.png'
import code from '../assets/code.png'

import iconDollar from '../assets/iconDollar.png'
import iconClock from '../assets/iconClock.png'
import iconBook from '../assets/iconBook.png'
import iconPlace from '../assets/iconPlace.png'

export const datas = [
  {
    title: 'O que é?',
    description:
      'Curso de Formação em Programação Fullstack que visa o treinamento dos futuros talentos a serem contratados pela empresa, objetivando o desenvolvimento de profissionais alinhados com os nossos valores.',
    image: `${first}`,
    background: ''
  },
  {
    title: 'Como funciona?',
    description:
      'O curso é dividido nas etapas de backend e frontend, com duração prevista de seis meses e composto de aulas online e encontros presenciais mensais em nossa sede, em Campo Bom/RS.',
    image: ''
  },
  {
    title: 'Compromisso',
    description:
      'Sabemos que formar um desenvolvedor fullstack em apenas seis meses é um grande desafio. Para isso, além de estarmos sempre atualizando o conteúdo e proporcionando mentorias com a própria equipe da 30, é necessário um empenho e dedicação dos alunos de, no mínimo, seis horas por dia.',
    image: `${clock}`,
    infos: [
      {
        icon: `${iconDollar}`,
        title: 'Investimento',
        subtitle: 'O curso é totalmente gratuito.'
      },
      {
        icon: `${iconClock}`,
        title: 'Carga horária',
        subtitle: '6 horas diárias.'
      }
    ]
  },
  {
    title: 'Requisitos',
    description:
      'Estar matriculado em curso técnico ou de graduação na área de tecnologia a partir de fevereiro de 2023, bem como ter disponibilidade para comparecer nos encontros presenciais a serem realizados em Campo Bom/RS.',
    image: `${checkbox}`,
    infos: [
      {
        icon: `${iconBook}`,
        title: 'Matrícula',
        subtitle: 'Curso Técnico ou Graduação'
      },
      {
        icon: `${iconPlace}`,
        title: 'Disponibilidade',
        subtitle: 'Campo Bom - RS'
      }
    ]
  },
  {
    title: 'Inscrição',
    description:
      'Após clicar no botão de inscrição você será direcionado para a página de cadastro, onde informará seus dados pessoais (nome, idade, telefone…).\nEm seguida, aparecerá em sua tela um link para preenchimento do Teste de Lógica. O teste é rápido, mas leva cerca de 12 minutos para ser concluído, sendo assim, somente siga com a inscrição em um momento que tenha esses minutinhos livres para completá-lo ;)',
    image: `${computer}`
  },
  {
    title: 'Seleção',
    description:
      'Depois de concluir a inscrição e o teste de lógica, os candidatos que atenderem aos requisitos iniciais serão convidados a responder algumas questões para escrita de código, que serão enviadas por e-mail e que deverão ser entregues via Github.\n Na 3ª e última etapa da inscrição, o candidato passará por entrevista com o RH da 3035TECH para conversarmos um pouco e nos conhecermos melhor. Por fim, os alunos que atenderem aos requisitos técnicos e de perfil estarão APROVADOS para a 3ª edição do 3035TEACH, com início das aulas previsto para fevereiro de 2023!',
    image: `${code}`
  },
  {
    title: 'E aí, você topa o desafio?',
    description: 'Então bora se inscrever!'
  }
]
