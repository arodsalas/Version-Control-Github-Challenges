// Your task is to build a basic counter that should increment whenever the "Increment" button is clicked.

//Answer:

// import React from "react";

// function Counter() {
//   const [count, setCount] = React.useState(0);

//   function handleIncrement() {
//     setCount(prevCount => prevCount + 1);
//   }

//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

//Explanation:

// The useState and setCount are very important for this challenge to work. The count state will always be 0 while using `useState(0)`.
// The `handleIncrement` function updates the number of times the button has been clicked by using `count + 1`.
// The `count` state in the return will always show the current amount the button has been clicked.