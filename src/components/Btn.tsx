import React, { ReactElement } from 'react'

interface Props {
  btnText: string
  handleClick?: () => void
}

const Btn = ({ btnText, handleClick }: Props): ReactElement<string, () => ReactElement> => {
  return (
    <button type="submit" onClick={() => (handleClick != null) ? handleClick() : ''} className="btn w-full mx-1.5 py-2.5">
      {btnText}
    </button>)
}

export default Btn
