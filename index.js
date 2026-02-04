const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>ABES Engineering College</h1>
      <img src="/image" width="300"/>
    `);

  } else if (req.url === '/image') {

    const imagePath = path.join(__dirname, './image/abes.jpg'); // image file name

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Image not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      }
    });

  } else if (req.url === '/about') {
    res.end("We are students");

  } else if (req.url === '/class') {
    res.end("IT A");

  } else {
    res.writeHead(404);
    res.end("404 Page Not Found");
  }

});

myserver.listen(8000, () => {
  console.log('Server is running on port 8000');
});
