import React, { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'

import UserFormWrapper from './views/UserFormWrapper'
import Submitted from './views/Submitted'

const App = (): ReactElement => {
  return (
    <div className="bg-red-100 h-screen flex">
      <Routes>
        <Route path="/" key={'/'} element={<UserFormWrapper/>}></Route>
        <Route path="/form-submitted" key={'/form-submitted'} element={<Submitted title="User Card"/>}></Route>
      </Routes>
    </div>
  )
}

export default App
