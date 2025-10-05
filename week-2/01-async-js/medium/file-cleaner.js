// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman


import fs from 'fs';
const filePath = './sample.txt';

function cleanFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        const cleanedData = data.replace(/\s+/g, ' ').trim();
        fs.writeFile(filePath, cleanedData, 'utf8', () => {
           console.log('File cleaned successfully.');
        });
    });
}

cleanFile(filePath);
