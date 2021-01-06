import React, {useContext} from 'react';
import './index.css';
import {ThemeContext} from '../../context/themeContext';
import {TodoContext} from '../../context/todoContext';


export default ({todo}) => {
  const {theme} = useContext(ThemeContext)
  const {deleteTodo} = useContext(TodoContext)
  //theme
  const {isLightTheme, light, dark} = theme
  const style = isLightTheme ? light : dark

  return (
    <div className="box" style={style}>
      <ul className="box_list">
        <li className="box_item" onClick={()=>{deleteTodo(todo.id)}}>{todo.title}</li>
      </ul>
    </div>
  )
}
