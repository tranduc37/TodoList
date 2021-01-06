import React from 'react';
import Header from './component/header';
import Todo from './component/Todo';
import Footer from './component/footer';
import ToggleTheme from './component/toogleTheme';
import { ThemeContextProvider } from './context/themeContext';
import { TodoContextProvider } from './context/todoContext';
import './App.css';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <ToggleTheme />
        <TodoContextProvider>
          <Todo />
        </TodoContextProvider>
      </ThemeContextProvider>
        <Footer />
    </div>
  );
}

export default App;
