import React, { ReactElement } from 'react'
import { FormikProps } from 'formik'

import { InputField } from '../model'
import ErrorMsg from './ErrorMsg'

interface Props {
  input: InputField
  formik: FormikProps<any>
}

const Textarea = ({ input, formik }: Props): ReactElement => {
  return (
    <div className="form-group mb-6">
      <div className="flex">
        <label className='px-3 py-1.5 min-w-fit w-[150px] text-grey-700' htmlFor={input.id}>{input.label} :</label>
        <textarea
          className="px-3 py-1.5 form-element form-control resize-none"
          id={input.id}
          name={input.id}
          placeholder={input.placeholder}
          value={formik.values[input.id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={3}
          ></textarea>
        </div>
        {
          (formik.errors[input.id] && formik.touched[input.id]) && <ErrorMsg text={formik.errors[input.id]}></ErrorMsg>
        }
      </div>
  )
}

export default Textarea
