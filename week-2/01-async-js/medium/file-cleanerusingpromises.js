
const fs = require('fs');
const filePath = './sample.txt';


function cleanFileusingPromises(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err); 
            }
            const cleanedData = data.replace(/\s+/g, ' ').trim();

            fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
                if (err) {
                    return reject(err); 
                }
                resolve('File cleaned successfully.');                      
            });
        });
    });

}


async function executeFileCleaning() {
    try {
        const message = await cleanFileusingPromises(filePath);
        console.log(message);
    } catch (error) {
        console.error('Error cleaning file:', error);
    }
}

executeFileCleaning();