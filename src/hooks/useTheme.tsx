import React, { createContext, useContext, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Theme } from '@/styles/styled'

import { lightTheme, darkTheme, colors } from '@/styles/theme'

import { ThemeProvider } from 'styled-components'
import { readTheme } from '@/store/modules/theme/actions'
import { GlobalStateInterface } from '@/store/modules/rootReducer'

interface ThemeContextData {
  theme: Theme
  changeTheme(theme: Theme): void
}
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const CustomThemeProvider: React.FC = ({ children }) => {
  const themeSelected = useSelector<GlobalStateInterface, Theme>(
    state => state.theme
  )
  const [theme, setTheme] = useState<Theme>(themeSelected)
  const dispatch = useDispatch()

  const changeTheme = (theme: Theme) => {
    if (theme.title === 'light') {
      setTheme({ ...darkTheme, ...colors })
      dispatch(readTheme({ ...darkTheme, ...colors }))
    } else {
      setTheme({ ...lightTheme, ...colors })
      dispatch(readTheme({ ...lightTheme, ...colors }))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }

  return context
}

export { CustomThemeProvider, useTheme }
