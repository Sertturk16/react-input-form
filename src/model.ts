export interface InputField {
  id: string
  label: string
  placeholder: string
  required?: boolean
  type?: string
  rules?: Rule[]
}

export interface Rule {
  required?: boolean
  regex?: RegExp
  min?: number
  max?: number
  message: string
}

export interface FormValues {
  name: string
  surname: string
  address: string
}

export interface Errors {
  name?: string
  surname?: string
  address?: string
}
