import { Theme } from '@/styles/styled'

export const readTheme = (theme: Theme): any => {
  return {
    type: 'READ_THEME',
    payload: theme
  }
}
