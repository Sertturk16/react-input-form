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

const Textarea = ({ id, label, placeholder, value, onChange, error }: Props): ReactElement => {
  return (
    <div className="form-group mb-6">
      <div className="flex">
        <label className='px-3 py-1.5 min-w-fit w-[150px] text-grey-700' htmlFor={id}>{label} :</label>
        <textarea
          className="px-3 py-1.5 form-element form-control resize-none"
          id={id}
          name={id}
          placeholder={placeholder}
          rows={3}
          value={value}
          onChange={onChange}
          ></textarea>
        </div>
          {error && <ErrorMessage text={error}/>}
      </div>
  )
}

export default Textarea
