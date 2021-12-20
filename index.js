// Main file for creating the monitor to function

const https = require('https');

https.get('https://www.simplygames.com/', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
})

.on('error', (error) => {
    console.log(error);
});
