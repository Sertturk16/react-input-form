import React, { ReactElement } from 'react'
import {
  Formik,
  Field,
  Form,
  FormikProps
} from 'formik'

import { rules } from '../lib/rules'
import TextField from './TextField'
import TextArea from './TextArea'
import Button from './Button'
import { InputField } from '../lib/model'

interface Props {
  title: string
  formTemplate: InputField[]
  handleSubmit: any
}
/**
 * @prop title {string} title of input form
 * @prop formTemplate {array} includes input informations
 * @prop handleSubmit {function} triggers when form is valid after clicking submit button
 */
const InputForm = ({ title, formTemplate, handleSubmit }: Props): ReactElement => {
  const initialValues: any = {}
  formTemplate.forEach(input => {
    initialValues[input.id] = ''
  })
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white">
      <h1 className='font-semibold text-2xl mb-6 ml-2'>{title}</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={(form) => { handleSubmit(form) }}
      >
        { (formik: FormikProps<any>) => (
          <Form>
            {
              Object.entries(formTemplate).map(([key, value]) =>
                <Field
                  key={value.id}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name={value.id}
                  id={value.id}
                  label={value.label}
                  validate={(e: string) => rules(e, value.rules)}
                  placeholder={value.placeholder}
                  error={formik.touched[value.id] ? formik.errors[value.id] : ''}
                  component={value.type === 'textfield' ? TextField : value.type === 'textarea' ? TextArea : null}
                />
              )
            }
          <Button buttonText='Submit'/>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InputForm
