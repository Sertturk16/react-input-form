import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    surname: '',
    address: ''
  }
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    submitForm: (state, action) => {
      state.user = action.payload
    },
    resetForm: (state) => {
      state = initialState
    }
  }
})

export const { submitForm, resetForm } = userSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})
