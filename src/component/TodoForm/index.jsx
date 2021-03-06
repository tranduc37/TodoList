import React, { useState, useContext } from 'react';
import {TodoContext} from '../../context/todoContext';
import './index.css';
import {v4 as uuidv4} from 'uuid';

export default () => {
  const {addTodo} = useContext(TodoContext)
  
  const [title, setTitle] = useState('');
  const onTitleChange = event => {
    setTitle(event.target.value);
  }
  const handelSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    })
    setTitle('');
  }
  return (
    <form className="todoForm" onSubmit={handelSubmit} >
      <input 
        type="text" 
        placeholder="Enter new plan..." 
        className="todoForm_input" 
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type="submit" value="Add" className="todoForm_submit"/>
    </form>
  )
}
