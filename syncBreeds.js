// Synchronous Functions return Data:

/*
  With synchronous functions, we simply return a value.

  Let's illustrate this with a small cat breed lookup application. It contains a
  breed info and a function which can help us look up a specific breed's details.
*/

// data in memory
const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you've served them for dinner."
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it
  return catBreeds[breed];
};

// get the return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay);

/*
There's nothing new or surprising in the code above and it also has comments to
explain itself. That said, please take some time reading it, and even run it, to
make sure that you understand it before moving on.
*/


