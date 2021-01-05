import React from 'react';
import Header from './component/header';
import Todo from './component/Todo';
import Footer from './component/footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
