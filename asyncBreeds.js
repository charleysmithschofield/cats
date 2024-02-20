/*
  Asynchronous Functions Can't return Data:

  In a more realistic scenario, we likely wouldn't have the breed data directly
  present in our code. Perhaps it would be provided to us as text file.
*/


// THIS IS AN EXAMPLE OF ASYNC LOGING THAT IS NOT CORRECT & WILL NOT WORK!
// const fs = require('fs');

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile
//   //        function returns undefined.
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

/*
 The Return Value console output above will not display the file data because our
 breedDetailsFromFile function will always return undefined.

 When the code above is run we get:
    breedDetailsFromFile: Calling readFile...
    Return Value:  undefined
    In readFile's Callback: it has the data.
*/

/*
  Asynchronous Functions Call Back with Data:

  Instead of using return data, we would have to modify our breedDetailsFromFile
  function to give back the data without using return.

  Since the breedDetailsFromFile function has already finished executing before
  we get our data back from the file system, it is not possible to return data
  in the synchronoud way that we are attempting here.

  Insetad, a callback should be passed in, and it will be given the data. In other
  words we will change from a RETURN to CALLBACK(data).


*/

// THIS FUNCTION USES A callback(data) INSTEAD OF A RETURN SO IT WILL WORK!

const { log } = require('console');
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

// CHANGE: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // print out details correctly
};

// CHANGE: Now passing two arguments into breedDetailsFromFile, breed string and callback function
breedDetailsFromFile('Bombay', printOutCatBreed);

/*
  CONCLUSION:

  We saw why and how async functiosn such as readFile, and our function breedDetailsFromFile,
  cannot simply return their data. Instead they must use callback functions to pass that data
  back.
*/