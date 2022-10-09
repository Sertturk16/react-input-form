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
    type: 'textfield'
  },
  {
    id: 'surname',
    label: 'Surname',
    placeholder: 'Enter Surname',
    type: 'textfield'
    },
    {
    id: 'address',
    label: 'Address',
    placeholder: 'Enter Address',
    type: 'textarea'
  }
]
```

### Example Component

`InputForm` component also accepts `title` prop to show at the top of input form and `setData` function to manipulate wrapper functions state.
```js
const [data, setData] = useState({
  name: '',
  surname: '',
  address: ''
})
```
```js
<InputForm formTemplate={formTemplate} title="User Form" setData={setData}/>
```


### License

MIT
