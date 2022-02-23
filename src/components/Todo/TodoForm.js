import React, { useState } from 'react';
import Button from '../UI/Button/Button.js';
import './TodoForm.css';

const TodoForm = function (props) {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(enteredValue)
    }
    return (
        <form onSubmitHandler={formSubmitHandler}>
            <div className='form-control'>
                <label>Coures Goal</label>
                <input
                    type='text'
                    placeholder='Add to do'
                    onChange={goalInputChangeHandler} />
            </div>
            <Button type='submit'>Add Todo</Button>
        </form>
    )
}

export default TodoForm