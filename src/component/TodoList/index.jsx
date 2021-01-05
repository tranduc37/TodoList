import React from 'react';
import './index.css'

export default ({todo, deleteTodo}) => {
  return (
    <div className="box">
      <ul className="box_list">
        <li className="box_item" onClick={()=>{deleteTodo(todo.id)}}>{todo.title}</li>
      </ul>
    </div>
  )
}
