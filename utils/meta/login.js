export const userName = 'ranzpogi'

export const userNameRules = [
  v => !!v || 'This field is required.',
  v => (v && v.length >= 3) || 'Min of 3 characters.',
  v => (v && v === userName) || 'Click forgot password'
]

export const passwordChallenge = 'Solve for x: 2x + 3 = 33'

export const passwordChAnswer = '15'

export const passwordRules = [
  v => !!v || 'This field is required.',
  v => (v && v === passwordChAnswer) || 'Click forgot password'
]
