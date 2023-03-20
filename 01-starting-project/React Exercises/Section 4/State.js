// You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.
// Your task is to add an event listener to listen for clicks on the button that's already included in the App component.
// Upon a button click, the price should change from $100 to $75.
// Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

//Answer:

// import React, { useState } from 'react';

// function App() {
//   const [price, setPrice] = useState(100);

//   function handleClick() {
//     setPrice(75);
//   }

//   return (
//     <div>
//       <h1>My Online Shop</h1>
//       <p>Price: ${price}</p>
//       <button onClick={handleClick}>Apply Discount</button>
//     </div>
//   );
// }

// export default App;

//Explanation:

// In the App component, there's a price state value at 100 and it uses useState. 
// What useState does is that it returns an array with two values, the current state and the function that updates it.
// The handleClick function updates the price state value at 75 by using the setPrice function with the help of useState
// When the button is clicked, the function handleClick is being used
// When it's being used, it updates the price value to 75 