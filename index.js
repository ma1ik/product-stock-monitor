// Import the fetch api for node
import fetch from 'node-fetch';

// Sending a Get request to the URL - SimplyGames
const get_request = async () => {
    const response = await fetch('https://www.simplygames.com/');
    const body = await response.text();
    console.log(body);

};

get_request();

