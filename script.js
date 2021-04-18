const fetch = require('node-fetch');
const fs = require('fs');

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(post => {
    fs.access('./result', err => {
      if (err) {
        console.log('Directory does not exist');
      } else {
        fs.writeFile('./result/posts.json', JSON.stringify(post), err => {
          if (err) throw err;
          console.log(
            'The file is successfully created into the folder result'
          );
        });
      }
    });
  });
