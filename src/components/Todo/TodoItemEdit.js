import React, { useState }from 'react'
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';


const TodoItemEdit = (props) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });
      
    const updateGoalHandler = (event) => {
      event.preventDefault();
      props.editItemHandler(setEdit);
         
        };
        // if(props.onEdit(props.id)){
        //     return <TodoForm edit={edit} onSubmit={editedHandler} />;
        // };
        if (edit.id) {
          return <TodoForm edit={edit} onSubmit={updateGoalHandler} />;
        }
  return (
    <li className='goal-item'> <TiEdit className='edit-icon' 
    onClick={updateGoalHandler}>
    {props.children}
   
 </TiEdit></li>
  )
}

export default TodoItemEdit;

