import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Formik,
  Field,
  Form,
  FormikProps
} from 'formik'

import { submitForm } from '../store'
import { rules } from '../lib/rules'
import TextField from './TextField'
import TextArea from './TextArea'
import Button from './Button'

import { FormValues } from '../model'

interface Props {
  title: string
}

const InputForm = ({ title }: Props): ReactElement => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialValues: any = {
    name: '',
    surname: '',
    address: ''
  }

  const handleSubmit = (form: FormValues): void => {
    dispatch(submitForm(form))
    navigate('/form-submitted')
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white">
      <h1 className='font-semibold text-2xl mb-6 ml-2'>{title}</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={(form) => { handleSubmit(form) }}
      >
        { (formik: FormikProps<any>) => (
          <Form>
            <Field key={'name'}
              {...formik.getFieldProps('name')}
              component={TextField}
              name={'name'}
              id={'name'}
              label={'Name'}
              validate={(e: string) => rules(e, [
                { required: true, message: 'This field is required!' },
                { regex: /^[A-ZİĞÜŞÖÇ]/, message: 'This field must start with capital letter!' }
              ])}
              placeholder={'Enter Name'}
              error={formik.touched.name ? formik.errors.name : ''}
            />
            <Field key={'surname'}
              {...formik.getFieldProps('surname')}
              component={TextField}
              name={'surname'}
              id={'surname'}
              label={'Surname'}
              validate={(e: string) => rules(e, [
                { required: true, message: 'This field is required!' },
                { regex: /^[A-ZİĞÜŞÖÇ]/, message: 'This field must start with capital letter!' }
              ])}
              placeholder={'Enter Surname'}
              error={formik.touched.surname ? formik.errors.surname : ''}
            />
            <Field key={'address'}
              {...formik.getFieldProps('address')}
              component={TextArea}
              name={'address'}
              id={'address'}
              label={'Address'}
              validate={(e: string) => rules(e, [
                { required: true, message: 'This field is required!' }
              ])}
              placeholder={'Enter Address'}
              error={formik.touched.address ? formik.errors.address : ''}
            />
          <Button buttonText='Submit'/>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InputForm
