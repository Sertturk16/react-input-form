import React, { ReactElement } from 'react'

import ErrorMessage from './ErrorMessage'

interface Props {
  id: string
  label: string
  placeholder: string
  value: string
  error?: string
  onChange: (params: any) => any
}

const Textfield = ({ id, label, placeholder, value, onChange, error }: Props): ReactElement => {
  return (
    <div className="form-group mb-6">
      <div className="flex">
        <label className='px-3 py-1.5 min-w-fit w-[150px] text-grey-700' htmlFor={id}>{label} :</label>
        <input type="text" className="px-3 py-1.5 m-0 form-element form-control"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
        {error && error !== '' && <ErrorMessage text={error}/>}
    </div>
  )
}

export default Textfield
