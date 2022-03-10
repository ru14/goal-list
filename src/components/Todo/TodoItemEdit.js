import React, { useState } from 'react'
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';


const TodoItemEdit = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const updateGoalHandler = (value) => {
    setEdit({id: props.id, value: props.value});
    // props.onEdit(props.id, value);    
  };

  const editGoalHandler = value => {
    console.log("In edit handler " + props.id + " " + value);
    props.onEdit(props.id, value);
  }

  if (edit.id) {
    return <TodoForm edit={edit} onAddGoal={editGoalHandler} />;
  }
  return (
    <li className='goal-item'>
      <TiEdit className='edit-icon' onClick={updateGoalHandler} />
    </li>
  )
}

export default TodoItemEdit;

