import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { submitForm } from '../store'
import { InputField, FormValues } from '../lib/model'
import InputForm from '../components/InputForm'

const UserFormWrapper = (): ReactElement => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formTemplate: InputField[] = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Enter Name',
      type: 'textfield',
      rules: [
        {
          required: true,
          message: 'This field is required!'
        },
        {
          regex: /^[A-ZİĞÜŞÖÇ]/,
          message: 'This field must start with a capital letter!'
        }
      ]
    },
    {
      id: 'surname',
      label: 'Surname',
      placeholder: 'Enter Surname',
      type: 'textfield',
      rules: [
        {
          required: true,
          message: 'This field is required!'
        },
        {
          regex: /^[A-ZİĞÜŞÖÇ]/,
          message: 'This field must start with a capital letter!'
        }
      ]
    },
    {
      id: 'address',
      label: 'Address',
      placeholder: 'Enter Address',
      type: 'textarea',
      rules: [
        {
          required: true,
          message: 'This field is required!'
        }
      ]
    }
  ]

  /**
 * updates store with passed argument and navigates to user-card route
 */
  const handleSubmit = (form: FormValues): void => {
    dispatch(submitForm(form))
    navigate('/form-submitted')
  }

  return (
    <div className='my-auto mx-auto max-w-xl flex-1'>
      <InputForm title={'User Form'} formTemplate={formTemplate} handleSubmit={handleSubmit}></InputForm>
    </div>
  )
}
export default UserFormWrapper
