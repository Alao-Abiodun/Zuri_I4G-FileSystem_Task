const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/result'), {}, err => {
  if (err) throw err;
  console.log('The folder is created successfully');
});

fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(post => {
    fs.writeFile(
      path.join(__dirname, '/result', 'posts.json'),
      JSON.stringify(post),
      err => {
        if (err) throw err;
        console.log('The file is successfully created into the folder result');
      }
    );
  });
