import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastProvider } from '@/hooks/useToast'
import { CustomThemeProvider } from '@/hooks/useTheme'

import { store, persistor } from '@/store'
const AppProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <CustomThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default AppProvider
