const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
