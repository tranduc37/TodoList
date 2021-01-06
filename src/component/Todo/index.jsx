import React, {useContext} from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import {TodoContext} from '../../context/todoContext';

export default () => {
  // initContext
  const {todos} = useContext(TodoContext)
  return (
    <div className="todo_main" >
      <TodoForm />
      <ul className="todo_main--list" >
        <li>
          {
            todos.map(todo => (
              <TodoList todo={todo} key={todo.id} />
            ))
          }
        </li>
      </ul>
    </div>
  )
}
