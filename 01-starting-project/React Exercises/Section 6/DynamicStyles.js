// Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.
// The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.

//Answer:

// import React, { useState } from "react";

// function App() {
//   const [isRed, setIsRed] = useState(false);

//   const handleClick = () => {
//     setIsRed(!isRed);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Toggle Style</button>
//       <p style={{ color: isRed ? "red" : "white" }}>Style me</p>
//     </div>
//   );
// }

// export default App;

//Explanation:

// The use of useState is once again very important in this challenge. What happens here is that the useState hook is creating a variable `isRed` and it also has a function `setIsRed` there in case of when it has to update.
// The purpose of `handleClick` function is so that it can go between `true` and `false` while using the `!`.
// In the return, the <style> tag applies the inline style in the JSX code. `isRed` is the color red when useState(true) and white when useState(false).
// The `onClick` event is useful to the `handleClick` that's been set on the button. Simply because this allows the user to click the button to change the color of the text.