// Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.
// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

//Answer:

// function transformToObjects(numbers) {
//     return numbers.map(number => ({val: number}));
//   }

//Explanation:

//The map() method returns a new array with the transformed objects.
//Therefore, everytime a number is passsed through the function, it will return with the single property 'val' in a new array.