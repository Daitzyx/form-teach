import React from 'react'
import { Input } from '../../Input'
import { Form } from './styles'

type DatasProps = {
  formData: any,
  setFormData: any
}

export const PersonalDatas = ({formData, setFormData} : DatasProps) => {
  return (
    <Form>
      <Input label='Nome' type='text' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <Input label='Email' type='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <Input label='Telefone' type='number' value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <Input label='Data de Nascimento' type='text' value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} />
      <Input label='Cidade onde mora' type='text' value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
    </Form>
  )
}
