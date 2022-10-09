import React, { ReactElement } from 'react'

import InputForm from '../components/InputForm'
const UserFormWrapper = (): ReactElement => {
  return (
    <div className='my-auto mx-auto max-w-xl flex-1'>
      <InputForm title={'User Form'}></InputForm>
    </div>
  )
}
export default UserFormWrapper
