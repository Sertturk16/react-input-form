export interface InputField {
  id: string
  label: string
  placeholder: string
  required?: boolean
  capital?: boolean
  type?: string
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
