const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

const zipFile = path.join(__dirname, 'sample.zip');
const outputDir = path.join(__dirname, 'extracted');

fs.createReadStream(zipFile)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on('close', () => {
    console.log('ZIP file extracted successfully to "extracted" folder!');
  })
  .on('error', (err) => {
    console.error('Error extracting ZIP:', err.message);
  });
