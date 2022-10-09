# Input Form

React input form made with tailwindcss and formik

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm build`

Builds the app for production to the `build` folder.

## InputForm Component

Generic Input Form component which can be created with `form template`.

### Usage

#### Example form template:
```ts
  const formTemplate: InputField[] = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Enter Name',
      type: 'textfield',
      rules: [
        {
          required: true,
          message: 'This field is required!'
        },
        {
          regex: /^[A-ZİĞÜŞÖÇ]/,
          message: 'This field must start with a capital letter!'
        }
      ]
    },
    {
      id: 'surname',
      label: 'Surname',
      placeholder: 'Enter Surname',
      type: 'textfield',
      rules: [
        {
          required: true,
          message: 'This field is required!'
        },
        {
          regex: /^[A-ZİĞÜŞÖÇ]/,
          message: 'This field must start with a capital letter!'
        }
      ]
    },
    {
      id: 'address',
      label: 'Address',
      placeholder: 'Enter Address',
      type: 'textarea',
      rules: [
        {
          required: true,
          message: 'This field is required!'
        }
      ]
    }
  ]
```

### Example Component
```js
<InputForm formTemplate={formTemplate} title="User Form"/>
```


### License

MIT
