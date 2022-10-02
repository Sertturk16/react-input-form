import React, { ReactElement, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { InputField } from './model'
import InputForm from './views/InputForm'
import Submitted from './views/Submitted'

const App = (): ReactElement => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    address: ''
  })

  const formTemplate: InputField[] = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Enter Name',
      required: true,
      capital: true,
      type: 'textfield'
    },
    {
      id: 'surname',
      label: 'Surname',
      placeholder: 'Enter Surname',
      required: true,
      capital: true,
      type: 'textfield'
    },
    {
      id: 'address',
      label: 'Address',
      placeholder: 'Enter Address',
      required: true,
      capital: false,
      type: 'textarea'
    }
  ]

  return (
    <div className="bg-red-100 h-screen flex">
      <Routes>
        <Route path="/" key={'/'} element={<InputForm formTemplate={formTemplate} title="User Form" setData={setData}/>}></Route>
        <Route path="/form-submitted" key={'/form-submitted'} element={<Submitted data={data} title="User Card"/>}></Route>
      </Routes>
    </div>
  )
}

export default App
