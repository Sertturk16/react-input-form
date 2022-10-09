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

  /**
 * resets store and navigates to user-form route
 */
  const navigateToForm = (): void => {
    dispatch(resetForm())
    navigate('/')
  }

  const user = useSelector((state: any) => state.user.user)
  return (
    <div className="flex-1 block p-6 rounded-lg shadow-lg bg-white max-w-md my-auto mx-auto">
      <h1 className='font-semibold text-2xl mb-1 ml-2'>{title}</h1>
      <div className="form-group mb-6">
        {
          Object.entries(user).map(([key, value]: [string, any]) =>
            (
              <div className="flex" key={key}>
                <span className='px-3 py-1.5 min-w-fit w-[100px] font-semibold text-grey-700 capitalize'>{key}:</span>
                <span className='px-3 py-1.5'>{value}</span>
              </div>
            )
          )
        }
        </div>
      <Button buttonText='Back to Main Page' handleClick={navigateToForm}/>
    </div>
  )
}

export default Submitted
