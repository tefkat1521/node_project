const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
origin: 'http://localhost:4200'
// Ruta raíz
app.get('/', (req, res) => {
    res.send('Node.js server is runninggggggggggggggggggg!');
});

app.get('/api/message', (req, res) => {
    const message = 'Hello from Node.jssssssssssssssss!';
    console.log(message);
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Node.js server running on port ${port}`);
});