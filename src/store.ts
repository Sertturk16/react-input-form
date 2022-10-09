import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
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
      state.value = action.payload
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
