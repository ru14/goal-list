import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Todo = () => {
    const [input, setInput] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ]);

    const addGoalHandler = enteredText => {
        setInput(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };

    const editItemHandler = (goalId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setInput(prev => prev.map(item => (item.id === goalId ? newValue : item)));
    };

    const deleteItemHandler = goalId => {
        setInput(prevGoals => {
            const removedArr = prevGoals.filter(goal => goal.id !== goalId);
            return removedArr;
        });
    };
    // const editItemHandler = editedText => {
    //   setInput(prevGoals => {
    //       const updatedGoals
    //   })
    // };



    const completeHandler = goalId => {
        setInput(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    // let content = (
    //     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
    //   );

    //   if (input.length > 0) {
    //     content = (
    //       <TodoList items={input} onDeleteItem={deleteItemHandler} />
    //     );
    //   }



    return (
        <div>
            <section id='goal-form'>
                <TodoForm onAddGoal={addGoalHandler} />
            </section>
            <section id='goals'>
                <TodoList
                    items={input}
                    onCompleteGoal={completeHandler}
                    onDeleteItem={deleteItemHandler}
                    onEditItem={editItemHandler}
                />
            </section>
        </div>
    );
}

export default Todo;