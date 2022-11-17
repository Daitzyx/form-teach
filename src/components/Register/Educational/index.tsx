import { Input } from '../../Input'
import { Form } from './styles'

type DatasProps = {
  formData: any
  setFormData: any
}

export const Educational = ({ formData, setFormData }: DatasProps) => {
  return (
    <Form>
      <Input
        question="Onde estará estudando em fevereiro de 2023?"
        type="text"
        value={formData.whereStudying}
        onChange={(e) =>
          setFormData({ ...formData, whereStudying: e.target.value })
        }
      />
      <Input
        label="Curso"
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
      />
      <Input
        label="Semestre"
        type="text "
        value={formData.semester}
        onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
      />
      <Input
        label="Previsão de conclusão"
        type="text"
        value={formData.endCourse}
        onChange={(e) =>
          setFormData({ ...formData, endCourse: e.target.value })
        }
      />
      <Input
        label="Profissão atual"
        type="text"
        value={formData.job}
        onChange={(e) => setFormData({ ...formData, job: e.target.value })}
      />
      <Input
        label="Empresa"
        type="text"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
    </Form>
  )
}
