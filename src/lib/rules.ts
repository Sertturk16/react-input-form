import { Rule } from './model'
/**
 * @param value string to be validated
 * @param arr array of rules, each rule contains message and rule
 * rule: {required: BOOLEAN} || {regex: RegExp} || {min: Number} || {max: Number}
 * @returns error message if not validated or empty string if validated
 */
export const rules = (value: string, arr: Rule[]): any => {
  const required = arr.find(rule => rule.required === true)
  const regex = arr.find(rule => rule.regex)
  const min = arr.find(rule => rule.min)
  const max = arr.find(rule => rule.max)

  if (required && !value) return required.message
  else if (regex?.regex && !regex.regex.test(value)) return regex.message
  else if (min?.min && value.length < min.min) return min.message
  else if (max?.max && value.length > max.max) return max.message
  else return ''
}
