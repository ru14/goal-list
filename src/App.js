import React, {useState} from 'react';
 import TodoForm from './components/Todo/TodoForm.js';
import TodoList from './components/Todo/TodoList.js';
import './App.css';




function App() {
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
  return (
    <div>
      <section id='goal-form'>
        <TodoForm onAddGoal = {addGoalHandler}/>
      </section>
      <section id='goals'>
        <TodoList
        items = {input}/>
      </section>
    </div>
  );
}

export default App;
