import React, { createContext, useReducer, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "none",
      color: "black",
    },
    dark: {
      background: "#113263",
      color: "white",
      maxWidth: '400px',
      margin: '0 auto',
      padding: '1rem',
      listStyle: 'none',
    }
  });

  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    })
  }

  //Data
  const themeContextData  = {
    theme,
    toggleTheme
  }

  //provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}