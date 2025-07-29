const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Static server running at http://localhost:${PORT}`);
});
