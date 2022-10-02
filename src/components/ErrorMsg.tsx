import React, { ReactElement } from 'react'
import { FormikErrors } from 'formik'

interface Props {
  text: string | FormikErrors<any> | string[] | Array<FormikErrors<any>> | undefined
}

const ErrorMsg = ({ text }: Props): ReactElement => {
  return (
    <div className="flex m-0 p-0 h-[0px]">
      <div className="w-[120px]"></div>
      <span className="text-red-500 text-xs">{typeof text === 'string' && text}</span>
    </div>
  )
}

export default ErrorMsg
