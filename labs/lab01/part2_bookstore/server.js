const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const pagesPath = path.join(__dirname, 'pages');

const server = http.createServer((req, res) => {
  const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact': 'contact.html'
  };

  const fileName = routes[req.url] || '404.html';
  const filePath = path.join(pagesPath, fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      return;
    }

    res.writeHead(fileName === '404.html' ? 404 : 200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`📡 Server running at http://localhost:${port}`);
});
