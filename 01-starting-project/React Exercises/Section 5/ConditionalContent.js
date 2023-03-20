// You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.
// Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

//Answer:

// import React, { useState } from "react";

// function App() {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleShowAlert = () => {
//     setShowAlert(true);
//   };

//   const handleHideAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <div>
//       <h1>My Web App</h1>
//       <button onClick={handleShowAlert}>Perform Dangerous Action</button>
//       {showAlert && (
//         <div id="alert">
//           <p>This is a warning! Are you sure you want to proceed?</p>
//           <button onClick={handleHideAlert}>Dismiss</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

//Explanation:

//The use of useState in this challenge is to either display an alert or not. Depending on if the user clicks on the button is when the useState comes in action.
// Once the button is clicked, the `handleShowAlert` function will pop up conditional content since we set `showAlert` to `true`.
// When this happens, the JSX code will also pop up when `showAlert` is `true`.
// Once the "dismiss" button is clicked on the conditional content, the function `handleHideAlert` is called. This will set `showAlert` to `false`, thus going back to the original screen.