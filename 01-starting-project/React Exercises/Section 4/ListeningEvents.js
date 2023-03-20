// Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).
// To start with your work, your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). And, of course, you should do that "the React way".

//Answer:

//In BookmarkButton.js,

// import React from 'react';

// function BookmarkButton() {
//   function handleClick() {
//     console.log('Stored!');
//   }

//   return (
//     <button onClick={handleClick}>Bookmark</button>
//   );
// }

// export default BookmarkButton;

//In App.js, 

//import React from 'react';
// import BookmarkButton from './BookmarkButton';

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <BookmarkButton />
//     </div>
//   );
// }

// export default App;

//Explanation:

// We've created a BookmarkButton component that has a button element inside of it. 
// The onClick event listener will allow for the handleClick function to work
// Now all that would be needed is include the BookmarkButton component in the App.js file and render it there for the function to be called.