// Build a custom <ExerciseComponent /> that outputs the text "First exercise - done!" on the screen.
// Use the empty ExerciseComponent.js file for your new component code and output this component inside the already existing App component thereafter (replace the existing JSX code in App with your own component).

//Answer:

//In App.js,

// import React from 'react';
// import ExerciseComponent from './ExerciseComponent';

// function App() {
//   return (
//     <div>
//       <ExerciseComponent />
//     </div>
//   );
// }

// export default App;

//In ExerciseComponent.js,

// import React from 'react';

// function ExerciseComponent() {
//   return (
//     <div>
//       <p>First exercise - done!</p>
//     </div>
//   );
// }

// export default ExerciseComponent;

//Explanation:
// In App.js, all it is doing is returning the '<div>' element that had the '<p>'
// In ExerciseComponent.js, it is rendering the <ExerciseComponent> component so that the <p> tag from App.js will show.