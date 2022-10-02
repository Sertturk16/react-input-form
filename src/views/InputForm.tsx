import React, { ReactElement } from 'react'
import {
  Formik,
  FormikProps,
  Form
} from 'formik'

import { useNavigate } from 'react-router-dom'
import Textfield from '../components/Textfield'
import Textarea from '../components/Textarea'
import Btn from '../components/Btn'
import { FormValues, InputField } from '../model'

interface Props {
  title: string
  setData?: (object: FormValues) => void
  formTemplate: InputField[]
}

const InputForm = ({ title, setData, formTemplate }: Props): ReactElement => {
  const navigate = useNavigate()

  const initialValues: any = {}
  formTemplate.forEach(formInput => {
    initialValues[formInput.id] = ''
  })

  const validate = (values: any): any => {
    const errors: any = {}
    const regex = /^[A-ZİĞÜŞÖÇ]/

    formTemplate.forEach(formItem => {
      if (formItem.capital && !regex.test(values[formItem.id])) {
        errors[formItem.id] = 'This field must start with capital letter.'
      }
      if (formItem.required && !values[formItem.id]) {
        errors[formItem.id] = 'This field is required.'
      }
    })

    return errors
  }

  const handleSubmit = (form: FormValues): void => {
    if (setData != null) {
      setData(form)
    }
    navigate('/form-submitted', {})
  }

  return (
    <div className="flex-1 block p-6 rounded-lg shadow-lg bg-white max-w-xl my-auto mx-auto">
      <h1 className='font-semibold text-2xl mb-6 ml-2'>{title}</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={(form) => { handleSubmit(form) }}
      validate={validate}
      >
      {
        (props: FormikProps<FormValues>) => (
          <Form>
            {
              formTemplate.map(inputField => (
                inputField.type === 'textfield'
                  ? <Textfield key={inputField.id} input={inputField} formik={props}/>
                  : inputField.type === 'textarea' ? <Textarea key={inputField.id} input={inputField} formik={props}/> : null
              ))
            }
            <Btn btnText="Submit"/>
          </Form>
        )
      }
      </Formik>
    </div>
  )
}

export default InputForm
