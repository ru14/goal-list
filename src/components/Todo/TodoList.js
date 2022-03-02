import React from 'react';
//import TodoForm from './TodoForm';
import TodoItemDelete from './TodoItemDelete';
import TodoItemEdit from './TodoItemEdit';
import './TodoList.css';


const TodoList = (props) => {

  return (
    <ul className='goal-list'>
      {props.items.map((goal, index) => (
        <div className={goal.isComplete ? 'goal-row complete' : 'goal-row'}
          key={index}>
          <div
            key={goal.id}
            onClick={props.onCompleteGoal}
            id={goal.id}
          >
            {goal.text}
          </div>
          <div className='icons'>
            <TodoItemDelete
              id={goal.id}
              onDelete={props.onDeleteItem}
            />
            <TodoItemEdit
              id={goal.id}
              value={goal.text}
              onEdit={props.onEditItem}
            />
          </div>
        </div>
      ))}
    </ul>
  )
}

export default TodoList