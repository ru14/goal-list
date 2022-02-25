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



    const updateGoalHandler = (goalId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setInput(prev => prev.map(item => (item.id === goalId ? newValue : item)));
    };

      const deleteItemHandler  = id => {
        const removedArr = [...input].filter(goal => goal.id !== id);

        setInput(removedArr);
      };
  
    const completeGoalHandler = goalId => {
        setInput(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    return (
        <div>
            <section id='goal-form'>
                <TodoForm onAddGoal={addGoalHandler} />
            </section>
            <section id='goals'>
                <TodoList
                    items={input}
                    onCompleteGoal={completeGoalHandler}
                    onDeleteItem={deleteItemHandler}
                    onUpdateGoal={updateGoalHandler}
                />
            </section>
        </div>
    );
}

export default Todo;