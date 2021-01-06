import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import './index.css'

export default () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <div onClick={toggleTheme} className="toggleTheme">
      <button className="toggleTheme__button">Toggle Theme</button>
    </div>
  )
}
