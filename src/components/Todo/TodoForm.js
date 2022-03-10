import React, { useState } from 'react';
import Button from '../UI/Button/Button.js';
import './TodoForm.css';

const TodoForm = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    //const [isComplete, setIsComplete] = useState('false');
  
    const goalInputChangeHandler = event => {
      setEnteredValue(event.target.value);
      // setIs =Complete(false)
    };
  
    const formSubmitHandler = event => {
      event.preventDefault();
      // if (!value clicked){
        //setIsComplete(false);
        //return
      //}
      props.onAddGoal(enteredValue);
    };
  
    return (
      <form onSubmit={formSubmitHandler}>
         {/* <div className={`form-control ${!isComplete ? 'invalid' : '' }`}></div> */}
        <div className={`form-control $`}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <Button type="submit">Add Todos</Button>
      </form>
    );
  };
  
  export default TodoForm;