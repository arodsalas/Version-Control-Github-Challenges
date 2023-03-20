// You're working on a text messaging app and your task is to validate the text entered by a user whilst the user is typing.
// If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.
// This image shows how the finished app should look like when an invalid message (i.e., too short) is entered:

//Answer: 

// import React, { useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');
//   const [messageValidity, setMessageValidity] = useState('Invalid');

//   function handleMessageChange(event) {
//     const value = event.target.value;
//     setMessage(value);

//     if (value.length >= 3) {
//       setMessageValidity('Valid');
//     } else {
//       setMessageValidity('Invalid');
//     }
//   }

//   return (
//     <div>
//       <h1>Text Messaging App</h1>
//       <label>
//         Enter your message:
//         <input type="text" value={message} onChange={handleMessageChange} />
//       </label>
//       <p>{messageValidity} message</p>
//     </div>
//   );
// }

// export default App;

//Explanation:

// There's two different values in the App component, message and messageValidity. Reason being that `message` will allow for the user to input any number value and `messageValidity` will take that number into consideration and output either Valid or Invalid.
// The handleMessageChange is important since it will determine whether or not the number is greater than or equal to 3.
// In the return, the `onChange` attribute will use the `handleMessageChange` everytime the function gets ran.
// Also in the return, the <p> element gets rendered and will show the messageValidity value everytime it gets ran as well.
