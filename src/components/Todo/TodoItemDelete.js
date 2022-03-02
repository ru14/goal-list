import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import './TodoItemDelete.css'

const TodoItemDelete = (props) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
      };
  return (
   <li className='goal-item'> <RiCloseCircleLine className='delete-icon' onClick={deleteHandler}>
      {props.children}
     
   </RiCloseCircleLine></li>
  )
}

export default TodoItemDelete;
