const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const unlinkAsync = promisify(fs.unlink);

const filePath = path.join(__dirname, 'sample.txt');
unlinkAsync(filePath)
  .then(() => {
    console.log('File deleted successfully using promisified fs.unlink!');
  })
  .catch((err) => {
    console.error('Error deleting file:', err.message);
  });
