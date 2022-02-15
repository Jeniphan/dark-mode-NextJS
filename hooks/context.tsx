import React, { FC } from 'react';

type Theme = 'light' | 'dark';

interface SharedState {
  theme: Theme;
  setTheme?: (value: Theme) => void;
}

const defaultState: SharedState = {
  theme: 'light'
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC = ({ children }) => {
  const [Theme, setTheme] = React.useState<Theme>(defaultState.theme)

  const sharedState: SharedState = {
    theme: Theme,
    setTheme: setTheme
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return React.useContext<SharedState>(AppContext)
}