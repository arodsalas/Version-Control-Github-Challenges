// You're working on a "Todo List" web app and your task is to output a list of dummy todo items dynamically. For this task, a Todo component has been prepared for you, though you must still add some code to it to receive and output the todo text.

//Answer:

//In ToDo.js

// import React from 'react';

// function Todo(props) {
//   return (
//     <div className="todo">
//       <p>{props.text}</p>
//     </div>
//   );
// }

// export default Todo;


//In ToDoList.js

// import React from 'react';
// import Todo from './Todo';

// function TodoList() {
//   const todos = [
//     { text: 'Learn React' },
//     { text: 'Build a Todo app' },
//     { text: 'Deploy to production' },
//   ];

//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <Todo key={index} text={todo.text} />
//       ))}
//     </div>
//   );
// }

// export default TodoList;

//Explanation:

// In ToDo.js, we have to create a component that takes a `text` prop.
// InToDoList.js, we work on creating an array of the objects with the `text`prop. From there, we have to pass each of those objects to the ToDo component in ToDo.js.
// The use of the `key` prop is important as well since it gives each ToDo component its own unique ID. This in turn helps React update the ToDo list.