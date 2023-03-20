// You're working on the UI prototype for an online shop and your task is to output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.
// The two product items should use the same component (<Product />) but output different data (title, price & description). Data should be passed to the components (and output there) via props.

//Answer:

//In App.js,

// import React from 'react';
// import Product from './Product';

// function App() {
//   return (
//     <div>
//       <h1>My Demo Shop</h1>
//       <Product title="Product 1" price={"10"} description="First product" />
//       <Product title="Product 2" price={"20"} description="Second product" />
//     </div>
//   );
// }

// export default App;

//In Product.js, 

// import React from 'react';

// function Product(props) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>Price: ${props.price}</p>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// export default Product;

//Explanation: 
//In Products.js, we use props for the values we gave the <product> component in App.js