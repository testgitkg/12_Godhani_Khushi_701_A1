const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'sample.txt');

const command = process.argv[2];
const content = process.argv[3] || "This is sample content.";

switch (command) {
  case 'read':
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return console.error("Read Error:", err);
      console.log("File Content:\n", data);
    });
    break;

  case 'write':
    fs.writeFile(filePath, content, (err) => {
      if (err) return console.error("Write Error:", err);
      console.log("File written successfully.");
    });
    break;

  case 'append':
    fs.appendFile(filePath, `\n${content}`, (err) => {
      if (err) return console.error("Append Error:", err);
      console.log(" Content appended to file.");
    });
    break;

  case 'delete':
    fs.unlink(filePath, (err) => {
      if (err) return console.error("Delete Error:", err);
      console.log("File deleted successfully.");
    });
    break;

  case 'rename':
    fs.rename(filePath, path.join(__dirname, 'files', 'renamed.txt'), (err) => {
      if (err) return console.error("Rename Error:", err);
      console.log("File renamed to renamed.txt.");
    });
    break;

  default:
    console.log("Usage: node fsOperations.js [read|write|append|delete|rename] [optional_content]");
}
