import { colors, darkTheme } from '@/styles/theme'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const theme = (state = { ...darkTheme, ...colors }, action: any): any => {
  switch (action.type) {
    case 'READ_THEME': {
      const theme = action.payload

      return theme
    }
    default: {
      return state
    }
  }
}

export default theme
