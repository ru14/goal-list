// import React, { useState } from 'react'
// import TodoForm from './TodoForm';
// import { RiCloseCircleLine } from 'react-ions/ri';
// import { TiEdit } from 'react-ions/ti';

// const Todo = ({goals,completeGoal}) => {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: ''
//   })
//   return goals.map((goal, index) => (
//     <div className={goal.isComplete ? 'goal-row complete' : 'goal-row'}
//       key={index}
//     >
//       <div
//         key={goal.id}
//         onClick={() => completeGoal(goal.id)}>
//         {goal.text}
//       </div>
//       <div className='icons'>
//         <RiCloseCircleLine />
//         <TiEdit />
//       </div>
//     </div>
//   ))
// }

// export default Todo;