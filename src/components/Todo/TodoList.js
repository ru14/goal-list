import React from 'react';
//import TodoForm from './TodoForm';
import './TodoList.css'

const TodoList = (props) => {
  return (
    <ul className='goal-list'>
      {props.items.map(goal => (
        <div
          key={goal.id}
          id={goal.id}
        // onDelete={props.onDeleteItem}
        >
          {goal.text}
          
        </div>
      ))}
    </ul>
  )
}

export default TodoList