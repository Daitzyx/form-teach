import React from 'react'
import { Input } from '../../Input'
import { Form } from './styles'

type DatasProps = {
  formData: any,
  setFormData: any
}

export const PersonalInfo = ({formData, setFormData} : DatasProps) => {
  return (
    <Form>
      <Input question='Descreva em algumas palavras o que mais gosta de fazer nas horas vagas.' type='text' value={formData.thingsLiked} onChange={(e) => setFormData({...formData, thingsLiked: e.target.value})}/>
      <Input question='Porque se interessa pela área de programação?' type='text' value={formData.programmingInterest} onChange={(e) => setFormData({...formData, programmingInterest: e.target.value})}/>
      <Input question='Como ficou sabendo do 3035TEACH?' type='text' value={formData.howKnows} onChange={(e) => setFormData({...formData, howKnows: e.target.value})}/>
      <Input question='Você teria 6 horas por dia de disponibilidade para se dedicar aos estudos do 3035TEACH?' type='text' value={formData.freeTime} onChange={(e) => setFormData({...formData, freeTime: e.target.value})}/>
    </Form>
  )
}
