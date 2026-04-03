const http = require('http');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const PORT = 5000;
const HOST = '0.0.0.0';

const readmeContent = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf-8');
const htmlBody = marked.parse(readmeContent);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MD Bazlur Rahman Likhon - Senior AI Engineer & Cloud Architect</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #0D1117;
      color: #c9d1d9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #e6edf3;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      font-weight: 600;
    }
    h1 { font-size: 2em; border-bottom: 1px solid #21262d; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; border-bottom: 1px solid #21262d; padding-bottom: 0.3em; }
    h3 { font-size: 1.25em; }
    p { margin-bottom: 1em; }
    a { color: #58a6ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    img { max-width: 100%; height: auto; }
    code {
      background-color: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 0.2em 0.4em;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 85%;
      color: #e6edf3;
    }
    pre {
      background-color: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 16px;
      overflow: auto;
      margin-bottom: 1em;
    }
    pre code {
      background: none;
      border: none;
      padding: 0;
      font-size: 85%;
    }
    blockquote {
      border-left: 4px solid #3d444d;
      padding-left: 1em;
      color: #9198a1;
      margin-bottom: 1em;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 1em;
      overflow: auto;
      display: block;
    }
    th, td {
      border: 1px solid #30363d;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background-color: #161b22;
      font-weight: 600;
      color: #e6edf3;
    }
    tr:nth-child(even) { background-color: #161b22; }
    hr {
      border: none;
      border-top: 1px solid #21262d;
      margin: 2em 0;
    }
    ul, ol {
      padding-left: 2em;
      margin-bottom: 1em;
    }
    li { margin-bottom: 0.25em; }
    details {
      background-color: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 1em;
    }
    summary {
      cursor: pointer;
      font-weight: 600;
      color: #e6edf3;
    }
    div[align="center"] { text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    ${htmlBody}
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache'
  });
  res.end(html);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
