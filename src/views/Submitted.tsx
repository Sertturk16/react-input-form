import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { resetForm } from '../store'

import Button from '../components/Button'
interface Props {
  title: string
}

const Submitted = ({ title }: Props): ReactElement => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const navigateToForm = (): void => {
    dispatch(resetForm())
    navigate('/')
  }
  const user = useSelector((state: any) => state.user.value)
  return (
    <div className="flex-1 block p-6 rounded-lg shadow-lg bg-white max-w-md my-auto mx-auto">
      <h1 className='font-semibold text-2xl mb-1 ml-2'>{title}</h1>
      <div className="form-group mb-6">
      <div className="flex">
        <span className='px-3 py-1.5 min-w-fit w-[100px] font-semibold text-grey-700 capitalize'>Name: </span>
        <span className='px-3 py-1.5'>{user.name}</span>
      </div>
      <div className="flex">
        <span className='px-3 py-1.5 min-w-fit w-[100px] font-semibold text-grey-700 capitalize'>Surname: </span>
        <span className='px-3 py-1.5'>{user.surname}</span>
      </div>
      <div className="flex">
        <span className='px-3 py-1.5 min-w-fit w-[100px] font-semibold text-grey-700 capitalize'>Address: </span>
        <span className='px-3 py-1.5'>{user.address}</span>
      </div>
      </div>
      <Button buttonText='Back to Main Page' handleClick={navigateToForm}/>
    </div>
  )
}

export default Submitted
