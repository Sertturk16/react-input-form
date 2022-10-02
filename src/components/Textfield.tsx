import React, { ReactElement } from 'react'
import { FormikProps } from 'formik'

import { InputField } from '../model'
import ErrorMsg from './ErrorMsg'

interface Props {
  input: InputField
  formik: FormikProps<any>
}

const Textfield = ({ input, formik }: Props): ReactElement => {
  return (
    <div className="form-group mb-6">
      <div className="flex">
        <label className='px-3 py-1.5 min-w-fit w-[150px] text-grey-700' htmlFor={input.id}>{input.label} :</label>
        <input type="text" className="px-3 py-1.5 m-0 form-element form-control"
          id={input.id}
          name={input.id}
          placeholder={input.placeholder}
          value={formik.values[input.id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {
        (formik.errors[input.id] && formik.touched[input.id]) && <ErrorMsg text={formik.errors[input.id]}></ErrorMsg>
      }
    </div>
  )
}

export default Textfield
