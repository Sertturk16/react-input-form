import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormValues } from '../model'

import Btn from '../components/Btn'
interface Props {
  title: string
  data: FormValues
  setData?: (object: FormValues) => void
}

const Submitted = ({ title, data, setData }: Props): ReactElement => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    if (setData != null) {
      setData({
        name: '',
        surname: '',
        address: ''
      })
    }
    navigate('/')
  }

  const entries: Array<[string, string]> = Object.entries(data)

  return (
    <div className="flex-1 block p-6 rounded-lg shadow-lg bg-white max-w-md my-auto mx-auto">
      <h1 className='font-semibold text-2xl mb-1 ml-2'>{title}</h1>
      <div className="form-group mb-6">
        {
          entries.map(([key, value]) => (
            <div key={key} className="flex">
              <span className='px-3 py-1.5 min-w-fit w-[100px] font-semibold text-grey-700 capitalize'>{key}: </span>
              <span className='px-3 py-1.5'>{value}</span>
            </div>
          ))
        }
      </div>
      <Btn handleClick={handleClick} btnText="Back to Main Page"/>
    </div>
  )
}

export default Submitted
