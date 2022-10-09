import React, { ReactElement } from 'react'

interface Props {
  buttonText: string
  handleClick?: (e: any) => any
}

const Button = ({ buttonText, handleClick }: Props): ReactElement<string, () => ReactElement> => {
  return (
    <button type="submit" className="btn w-full mx-1.5 py-2.5" onClick={(e) => handleClick ? handleClick(e) : null}>
      {buttonText}
    </button>)
}

export default Button
