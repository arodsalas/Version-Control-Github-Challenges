// For this exercise, imagine that colleagues gave you code they wrote for a React app they're working on.
// At the moment, this code is failing and it's your job to find and fix all errors that are hiding in the code.

//Error code:

// import React from 'react';

// import './styles.css';

// // don't change the Component name "App"
// export default function App() {
//     const clickHandler = () => {
//         console.log('Clicked!');
//     };
    
//     return (
//         <Div>
//           <h2>You're logged in!</h2>
//           <p>Welcome to your user profile!</p>
//           <button onclick={clickHandler}>Click me!</button>
//         </Div>
//     );
// }


//Correct code:

// import React from 'react';
// import './styles.css';

// export default function App() {
//   const clickHandler = () => {
//     console.log('Clicked!');
//   };
  
//   return (
//     <div>
//       <h2>You're logged in!</h2>
//       <p>Welcome to your user profile!</p>
//       <button onClick={clickHandler}>Click me!</button>
//     </div>
//   );
// }

//Explanation: 

//Issues from the error code was that 'Div' component was not defined. So we must replace it with a 'div' tag. 
//Another issue was that the onclick event handler should be written in camelCase as onClick.