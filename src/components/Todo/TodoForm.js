import React, { useState } from 'react'

const TodoForm =function () {
    const [enteredValue, setEnteredValue] =useState('');
    return (
        <form>
            <div className='form-control'>
<label>Coures Goal</label>
<input/>
            </div>
        </form>
    )
}

export default TodoForm