const fs = require('fs')

const followersData = JSON.parse(fs.readFileSync('followers.json', 'utf8'))

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Followers Count</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 20px;
      }

      .container {
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        text-align: center;
        max-width: 500px;
        width: 100%;
      }

      h1 {
        color: #333;
        margin-bottom: 30px;
        font-size: 28px;
      }

      .count {
        font-size: 72px;
        font-weight: bold;
        color: #667eea;
        margin: 20px 0;
      }

      .label {
        color: #666;
        font-size: 18px;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Instagram Followers</h1>
      <div id="content"></div>
    </div>

    <script>
      const followersData = ${JSON.stringify(followersData)};
      const count = followersData.length;
      document.getElementById('content').innerHTML = \`
        <div class="count">\${count.toLocaleString()}</div>
        <div class="label">Total Followers</div>
      \`;
    </script>
  </body>
</html>`

fs.writeFileSync('index.html', html)
