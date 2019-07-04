const request = require('request');
const args = process.argv.slice(2);

const returnBreed = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      if (data && data[0]) {
        console.log(data[0].description);
      } else {
        console.log('invalid entry');
      }
      
    }
  });
};

returnBreed(args[0]);











// const request = require('request');
// const args = process.argv.slice(2);

// returnBreed = function(breed) {
//   request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
//     const data = JSON.parse(body);
    
//     if (error) {
//       console.log('Error: ', error);
//     } else {
//       console.log(data[0].description);

//     }
//   });
// };



// returnBreed(args[0]);
