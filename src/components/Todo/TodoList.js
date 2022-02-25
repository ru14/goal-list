import React, { useState } from 'react';
import TodoForm from './TodoForm';
import './TodoList.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const TodoList = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    props.onUpdateGoal(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
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
              onClick={props.onDeleteItem(goal.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: goal.id, value: goal.text })}
              className='edit-icon' />
          </div>
        </div>
      ))}
    </ul>
  )
}

export default TodoList