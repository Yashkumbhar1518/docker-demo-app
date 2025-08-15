const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Docker Node.js API!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
