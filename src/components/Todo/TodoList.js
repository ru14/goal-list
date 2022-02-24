import React from 'react';
import TodoForm from './TodoForm';
import './TodoList.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

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
            <RiCloseCircleLine
              onDelete={props.onDeleteItem}
              className='delete-icon'
            />
            <TiEdit
            onEdit={props.onEditItem}
            className='edit-icon' />
          </div>
        </div>
      ))}
    </ul>
  )
}

export default TodoList