const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const sourceDir = path.join(__dirname, 'myfolder');
const outputZip = path.join(__dirname, 'myfolder.zip');

const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', {
    zlib: { level: 9 }
});

output.on('close', () => {
    console.log(`Zip created: ${outputZip}`);
    console.log(`Total bytes: ${archive.pointer()}`);
});
archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);

archive.directory(sourceDir, false);

archive.finalize();
