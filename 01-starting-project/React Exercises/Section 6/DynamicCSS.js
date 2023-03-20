// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app. This task is therefore very similar to the previous coding exercise but you're now going to set a CSS class dynamically - instead of an inline style.

//Answer:

// import React, { useState } from "react";

// function App() {
//   const [isActive, setIsActive] = useState(false);

//   function handleButtonClick() {
//     setIsActive((prevState) => !prevState);
//   }

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Toggle Class</button>
//       <p className={isActive ? "active" : ""}>Style me</p>
//     </div>
//   );
// }

// export default App;

//Explanation:

// The `useState` is in charge of seeing whether or not the CSS class will be used. Placing it as `false` means it will not have any CSS applied to it at the start.
// `handleButtonClick` gets called when the button is clicked. It's main purpose is to set the `isActive` value from `true` to `false` and likewise.
// The `className` prop in the JSX code applies the CSS to the <p> based on the whether or not the `isActive` value is true or false.