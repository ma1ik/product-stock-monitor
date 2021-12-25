// Import the fetch api for node
import fetch, {Headers} from 'node-fetch';

// Added
const meta = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
};
const headers = new Headers(meta);

// Sending a Get request to the URL - SimplyGames
const get_request = async () => {
    const response = await fetch('https://www.simplygames.com/',
        {headers});
    const body = await response.text();
    console.log(body);

};

get_request();

